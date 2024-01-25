interface ParticipantsListProps {
  name: string;
}

export default function ParticipantsList({
  name,
}: ParticipantsListProps) {
  return <span>{name}</span>;
}
