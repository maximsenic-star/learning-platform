import DeleteGroupBtn from "@/components/delete-group-btn";
import { db } from "@/db";
import { groupsTable } from "@/db/schema";
import { Delete } from "lucide-react";

export default async function Groups() {
  const groups = await db.select().from(groupsTable);

  return (
    <div className="px-20 py-6">
      <h2 className="">Groups</h2>

      <ul className="flex flex-wrap gap-4">
        {groups.map((group) => (
          <li key={group.id} className="border shadow rounded-2xl p-4">
            <h3>{group.name}</h3>
            <DeleteGroupBtn id={group.id} />
            </li>
        ))}
      </ul>
    </div>
  );
}

// notion, confluence
// cloude