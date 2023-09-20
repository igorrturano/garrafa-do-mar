import fs from 'fs';
import path from 'path';
import process from 'process';

export function getMethod(href: string) {
    const   root = process.cwd();
    const   coursePath = path.join(root, href);
    const   courseJson = fs.readFileSync(coursePath, 'utf8');
    const   courseList = JSON.parse(courseJson);

    return  courseList;
}

export function getData(href: string, key?: string | undefined) {
    const   data = getMethod(href);

    if (key) {
        return (data[key]);
    }
    return (data);
}

export function getSortedData(href: string, filter: string, key?: string | undefined): any {
    return getData(href, key).sort(
        (a: { [key: string]:any }, b: { [key: string]: any }) => {
            if (a[filter] > b[filter]) {
                return 1;
            }
            else {
                return -1;
            }
        }
    );
}