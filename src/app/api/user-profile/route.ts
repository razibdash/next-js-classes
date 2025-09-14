import { cookies } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(request:NextRequest){

   const token=request.cookies.get('token')
   const cookiesStore=await cookies()
   const userCookie=cookiesStore.set('user',"razibdash")
   console.log(userCookie)
   console.log(token)
    return new Response("user profile",{
        headers:{
            'Content-type':"text/plain",
            'Set-Cookie':'token=123456789'
        }
    })

}