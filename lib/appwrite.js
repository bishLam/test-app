import { Client, Databases, Account } from "react-native-appwrite";

const config = () => {
    endpoint = "https://cloud.appwrite.io/v1"
    projectID = "67c0ec26003c3a15d2b0";
    platform = "au.com.testapp"
}

const client = new Client();
client
  .setEndpoint(config.setEndpoint)
  .setProject(config.projectID) 
  .setPlatform(config.platform);


export const account = new Account(client);
export const databases = new Databases(client);
