"use client";
import React, { useEffect, useState } from "react";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}


const Users = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await res.json();
      console.log(users)
      setData(users);
      
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-600">Loading users...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-4 text-red-500">No users found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-3">
        {data.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-stone-700 rounded-lg shadow hover:bg-stone-600 transition"
          >
            <p className="font-semibold text-2xl text-stone-50">{user.name}</p>
            <p className="text-sm text-white">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
