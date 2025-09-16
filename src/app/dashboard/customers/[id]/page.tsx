import NavLink from "../../nav-link";

export default function CustomerDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      CustomerDetail Page. {params.id}
      <NavLink />
    </div>
  );
}
