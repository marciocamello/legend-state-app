import { getProfile } from "@/profile";

import EditProfile from "./edit-profile";

export default async function Home() {
  const profile = await getProfile();
  return (

    <div className="p-10 flex flex-col gap-2">
      <h1 className="text-2xl">Form Immediate Page</h1>
      <EditProfile profile={profile} />
    </div>
  );
}
