'use client'

import { observer, } from "@legendapp/state/react";
import { useProfile } from "./profile-context";

import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";

function EditProfile() {
  const { formState$, onSave } = useProfile()

  return (
    <div className="flex flex-col gap-2">
      <Input $value={formState$.name} placeholder="Name" />
      <Input $value={formState$.email} placeholder="Email" />
      <Input $value={formState$.phone} placeholder="Phone" />
      <Input $value={formState$.address} placeholder="Address" />

      <Button onClick={onSave}>Save</Button>
    </div>
  )
}

export default observer(EditProfile)