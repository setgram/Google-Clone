"use client";

import React, { useState, useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("");
  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=hOjRnUyl06kxfjUhX1CP`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);
  return <div>{country}</div>;
}
