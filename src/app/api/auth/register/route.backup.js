import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export async function POST(request){
    const{name,email,password}=await request.json();
  
    await connect();
    // const hashedPassword=await bcrypt.hash(password,5);
   await User.create({name,email,password});
    return NextResponse.json({message:"User Created"},{status:201})
}