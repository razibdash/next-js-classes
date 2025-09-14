
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    // const requestHeader= new Headers(request.headers)
    // console.log(requestHeader.get("Authorization"))
    const headersList = await headers()
    const Authorization=headersList.get('Authorization')as string;
    console.log(Authorization)
     
    return NextResponse.json(
    {
      message: "server is running",
      success: true, 
    },
    {
      status: 201,
      headers: {
        Authorization:Authorization,
      },
    }
  );
}