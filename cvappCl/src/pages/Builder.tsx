import Canvas from '../components/Canvas';
import { sampleDocument } from '../data/samples/sampleDocument';

export default function Builder() {
  return <Canvas document={sampleDocument} />;
}