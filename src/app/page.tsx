import BlurryContainer from '@/components/molecules/BlurryContainer/BlurryContainer';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BlurryContainer>content</BlurryContainer>
    </div>
  );
}
