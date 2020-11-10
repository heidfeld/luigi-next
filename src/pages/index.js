import React from 'react';
import { connectToDatabase } from '../util/mongodb';
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home({ isConnected }) {
  return (
      <div>
        {isConnected ? (
            <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
            <h2 className="subtitle">
              You are NOT connected to MongoDB.
            </h2>
        )}
        <Dashboard/>
      </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected }
  }
}
