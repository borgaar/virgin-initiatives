import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Person } from "../../lib/people";

export default function PersonAvatar({ person }: { person: Person }) {
  return (
    <Avatar>
      <AvatarImage src={person.avatar} />
      <AvatarFallback>
        {[person.firstName, person.lastName]
          .map((n) => n[0]!)
          .reduce((a, b) => a + b, "")}
      </AvatarFallback>
    </Avatar>
  );
}
