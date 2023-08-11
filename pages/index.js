import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import Form from "@/components/Form/index.js";
import { useRouter } from "next/router";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ locationData }) {
  const router = useRouter(); 

  const handleFormSubmit = (formData) => {
    router.push("/Location"); 
  };

  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Form onSubmit={handleFormSubmit} locationData={locationData} />
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
