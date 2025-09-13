
import { users } from "./data";
import {NextResponse, type NextRequest } from "next/server";

export async function GET(request:NextRequest){
  const searchParams=request.nextUrl.searchParams;
  const query=searchParams.get('search')?.toLowerCase() || '';
  const numberQuery=searchParams.get('phone')?.toLowerCase()||'';
   // Filter users by name or email
  const filteredUsers =query? users.filter(
    (user) =>{
     const emailAndName= user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
      const number=user.phone?.toLowerCase().includes(numberQuery)
      return emailAndName && number;
    }

      
  ):users;

  return NextResponse.json(filteredUsers, { status: 200 });
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

