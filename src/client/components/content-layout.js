import React from 'react'

export default function ContentLayout (props) {
  return (
    <main role="main">
      <section className="mt-4 mb-5">
        {props.children}
      </section>
    </main>
  )
}
