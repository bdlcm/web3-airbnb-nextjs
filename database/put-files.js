import { Web3Storage } from "web3.storage";
import getConfig from "next/config";

function getAccessToken() {
  const { publicRuntimeConfig } = getConfig();
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return publicRuntimeConfig.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function getFiles() {
  const fileInput = document.querySelector('input[type="file"]');
  return fileInput.files;
}

function makeFileObjects(obj) {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  // const obj = { hello: 'world' }
  const metadataFile = jsonFile("metadata.json", {
    path: "something",
  });

  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([blob], "hello.json"),
  ];

  return files;
}

async function storeFiles(obj) {
  const files = makeFileObjects(obj);
  const client = makeStorageClient();

  //const cid = await client.put(files)

  const cid = await client.put(files, {
    // the name is viewable at https://web3.storage/files and is included in the status and list API responses
    name: "some-other-name",
  });

  console.log("stored files with cid:", cid);
  return cid;
}

function jsonFile(filename, obj) {
  return new File([JSON.stringify(obj)], filename);
}
async function listUploads() {
  const client = makeStorageClient();
  for await (const upload of client.list()) {
    // console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
    const metadata = await getImageMetadata(upload.cid);
    console.log("meta", metadata);
    //  console.log("upload", upload.cid)
    //  try {
    //   const metadata = await getImageMetadata(upload.cid)
    //   console.log("meta", metadata)
    //   return metadata
    // } catch (e) {
    //   // console.error('error getting image metadata:', e)

    // }
  }
}
async function getImageMetadata(cid) {
  const url = makeGatewayURL(cid);
  const res = await fetch(`https://${cid}.ipfs.w3s.link/hello.json`);
  if (!res.ok) {
    throw new Error(
      `error fetching image metadata: [${res.status}] ${res.statusText}, ${cid}`
    );
  }
  const metadata = await res.json();
  // const gatewayURL = makeGatewayURL(cid, metadata.path)
  // const uri = `ipfs://${cid}/${metadata.path}`
  return metadata;
}

function makeGatewayURL(cid) {
  return `https://${cid}.ipfs.w3s.link/hello.json`;
}

export { storeFiles, listUploads };
