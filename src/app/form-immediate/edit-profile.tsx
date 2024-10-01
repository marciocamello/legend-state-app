'use client'

import { useObservableSyncedQuery } from "@legendapp/state/sync-plugins/tanstack-react-query";
import { observer } from "@legendapp/state/react";
import { Profile } from "@/profile";
import { Input } from "@/components/input";

function EditProfile({ profile }: {
  profile: Profile
}) {
  const state$ = useObservableSyncedQuery<Profile>({
    query: {
      queryKey: ['profile'],
      queryFn: async () => {
        return fetch('/api/profile').then(res => res.json())
      },
      initialData: { ...profile },
      refetchOnMount: false
    },
    mutation: {
      mutationFn: async function <Profile>(variables: Profile) {
        return fetch('/api/profile', {
          method: 'POST',
          body: JSON.stringify(variables)
        }).then(res => res.json())
      }
    }
  })

  return (
    <div className="flex flex-col gap-2">
      <Input $value={state$.name} placeholder="Name" />
      <Input $value={state$.email} placeholder="Email" />
      <Input $value={state$.phone} placeholder="Phone" />
      <Input $value={state$.address} placeholder="Address" />
    </div>
  )
}

export default observer(EditProfile)