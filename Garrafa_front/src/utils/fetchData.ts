"use server";
import { cookies } from "next/headers";

interface FetchDataI {
  pathName: string;
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}

export const fetchData = async ({
  pathName,
  method = "GET",
  body,
}: FetchDataI): Promise<any> => {
  const Cookie = cookies();

  const accessToken = Cookie.get("access_token")?.value;

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + accessToken,
  };

  try {
    const options: { headers: any; method: any; credentials: any; body?: any } =
      {
        headers: headers,
        method,
        credentials: "include",
      };

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      options["body"] = JSON.stringify(body);
    }

    let res = await fetch(process.env.BACKEND_API + pathName, options);

    if (res.status === 401 && pathName !== "/auth/logout") {
      res = await fetch(process.env.BACKEND_API + "/auth/logout", {
        method: "POST",
        headers: headers,
      });
    }

    if (pathName === "/auth/logout") {
      if (res.ok) {
        Cookie.set("access_token", "", { expires: new Date(0) });
      } else {
        console.error("Logout failed");
      }
    }

    return res.json();
  } catch (err: any) {
    console.log(`Error Message:${err.message}, Status Code:${err.statusCode}`);
    throw err;
  }
};
