// eslint-disable-next-line import/no-extraneous-dependencies
import { animated, useSpring } from '@react-spring/web';

export default function Home() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 200,
      },
    });
  };
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
      onClick={handleClick}
    />
  );
}
