import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Input type="email" />
      <Input type="password" />
      <Button size="lg">Primary</Button>
      <Button variant="secondary" size="lg">Secondary</Button>
      <Button variant="ghost" size="lg">Ghost</Button>
      <Button variant="muted" size="lg">Muted</Button>
      <Button variant="destructive" size="lg">Destructive</Button>
      <Button variant="outline" size="lg">Outline</Button>
      <Button variant="default" size="lg">Default</Button>
      <Button variant="teritary" size="lg">Link</Button>
    </div>

  );
}
