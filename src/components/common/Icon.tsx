import {
  BrickWall,
  Construction,
  DoorOpen,
  Drill,
  Grid3X3,
  Hammer,
  House,
  Layers3,
  Mountain,
  Package,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Trees,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '../../types/content';

const icons: Record<IconName, LucideIcon> = {
  house: House,
  hammer: Hammer,
  grid: Grid3X3,
  'brick-wall': BrickWall,
  zap: Zap,
  wrench: Wrench,
  ruler: Ruler,
  truck: Truck,
  package: Package,
  layers: Layers3,
  mountain: Mountain,
  roof: House,
  trees: Trees,
  construction: Construction,
  'paint-bucket': PaintBucket,
  'door-open': DoorOpen,
  'shield-check': ShieldCheck,
  drill: Drill,
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const LucideIconComponent = icons[name];
  return (
    <LucideIconComponent aria-hidden="true" className={className} size={size} strokeWidth={1.8} />
  );
}
