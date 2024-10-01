'use client'

import { useObservable, observer } from "@legendapp/state/react"
import { Input } from "@/components/input"

function Common() {
  const name$ = useObservable({
    first: "Marcio",
    last: "Andre",
    full: () => `${name$.first.get()} ${name$.last.get()}`
  })

  return (
    <div className="p-10 flex flex-col gap-2">
      <h1 className="text-2xl">Basics Page</h1>
      <div className="flex flex-col gap-4">
        <Input
          $value={name$.first}
          placeholder="First Name"
        />
        <Input
          $value={name$.last}
          placeholder="Last Name"
        />
      </div>
      <div>Full name: {name$.full.get()}</div>
    </div>
  )
}

export default observer(Common)