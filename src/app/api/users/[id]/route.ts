import { NextResponse } from "next/server";
import { users } from "../data";


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId =await parseInt(params.id, 10);

  // Find user by ID
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json(
      { error: `User with ID ${params.id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(user, { status: 200 });
}

// PATCH user by id
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = parseInt(params.id, 10);
    const body = await request.json();

    // Find the user
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextResponse.json(
        { error: `User with ID ${params.id} not found` },
        { status: 404 }
      );
    }

    // Update user (merge old data + new data)
    users[userIndex] = { ...users[userIndex], ...body };

    return NextResponse.json(
      { message: "User updated successfully", user: users[userIndex] },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}


// DELETE user by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId =await parseInt(params.id, 10);

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return NextResponse.json(
      { error: `User with ID ${params.id} not found` },
      { status: 404 }
    );
  }

  // Remove user
  const deletedUser = users.splice(userIndex, 1)[0];

  return NextResponse.json(
    { message: "User deleted successfully", deletedUser },
    { status: 200 }
  );
}