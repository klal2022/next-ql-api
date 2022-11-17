// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from 'next'
import sql_query from "../../lib/db";

const handler = async(_, res) => {

  try {

    const results = await sql_query(`
      SELECT * FROM users 
      ORDER BY id desc
      LIMIT 10
    `);
    return res.json(results);

  } catch (e) {
    res.status(500).json({message: e.message});
  }
}

export default handler; 

/*export default function handler(req, res) {
  
  
    res.status(200).json({ name: 'Patel Viral' })
  }
  export async function getServerSideProps({ params }) {

    const job = await db 
    .select('*')
    .from('users')
    .first();

    console.log(job);

    return {
      props:{},
    }
  } */