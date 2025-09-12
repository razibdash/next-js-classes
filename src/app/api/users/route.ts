import { json } from "node:stream/consumers";
import { users } from "./data";

export async function GET(){
    return Response.json(users)
}

export async function POST(request:Request){
  const newData=await request.json()
  const newUser={
    id:users.length+1,
    ...newData
  }
  users.push(newUser);

  return new Response(JSON.stringify(newUser))

}