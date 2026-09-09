import { Follow } from "./follow.model";



export const followServices = { 
async createFollow (user: string, followed: string) {
  return await Follow.create({ user, followed });
  }  // ...
};