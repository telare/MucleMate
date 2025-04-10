type CartInfoPageProps = {
  title: string;
  description: string; // fetch all inside small cart with line clamp and give all to it
  imgSrc: string;
};

export default function CartInfoPage({
  title,
  description,
  imgSrc,
}: CartInfoPageProps) {
  return (
    <div>
      {/* centerd img / carousel maybe */}
      <div></div>
      {/* main con */}
      <div>
        <div>
          <h1>{title}</h1>
          {/* maybe some tags  */}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
