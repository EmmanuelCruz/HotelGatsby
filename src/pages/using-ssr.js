import * as React from "react"

const UsingSSR = ({ serverData }) => {
  return (
    <h1>
      This page is <b>rendered server-side</b>
    </h1>
  )
}

export const Head = () => <h1 title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
