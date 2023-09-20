## IMPORTANT
You need the frontend running first so you can scan the qr code properly
https://github.com/Zencon-Atitude/Garrafa_front
- Clone the project
- Install dependencies
    - npm i | yarn
- Go to Setup Deployment and install cloudfare
- Run the project
    - npm run dev or yarn dev


## Installation

```bash
$ yarn | npm i
```

## Setup for deployment
- The link below is for ubuntu amd64 environment
- If that's not your case, download and install the cloudfare for your machine
```bash
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb && 

sudo dpkg -i cloudflared.deb && 

sudo cloudflared service install eyJhIjoiNTg5Yjc1Zjk3YjlhOTNmYmM4YjYxMTc4YmIzYjViY2UiLCJ0IjoiOTlhY2EyYjYtYWEyYy00NWI2LTlhMTgtYjFkMmY0OTQ0NWI0IiwicyI6Ik0ySTFOR0ZsTXpndE1qazFZaTAwTmpRNUxXSXlPVFl0TkRJMllXSTFOR00zTUdVMyJ9
```

## Running the app

```bash
# main branch
$ yarn start | npm run start

# watch mode
$ yarn start:dev | npm run start:dev
```

## Connect your nomo app
- You need to be in develop mode
    - Go to settings
    - Information
    - About this app
    - Tap 10 times nomo logo
    - Go to QR Code scanner and scan the imagem below

<img src="image.png" alt="qr-code" width="200"/>


## Pitch Presentation
```
https://docs.google.com/presentation/d/1ELL6Kv4LHwJZwwzZeT9uUNHZdaOYA1bE/edit?usp=sharing&ouid=116717071862741736842&rtpof=true&sd=true 
```
## App journey
```
https://drive.google.com/file/d/1FcLSzaNuKjSEXQfvS8K9RjJtcnP7VtO8/view?usp=sharing

```
## Swagger Documentation
https://garrafa.atitude247.com.br/api
