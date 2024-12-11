import Background from "@/components/Background";

interface Props {
  children: React.ReactNode;
}
const layout = ({ children }: Props) => {
  return <Background>{children}</Background>;
};

export default layout;
