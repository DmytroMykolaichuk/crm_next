import Image from 'next/image';

interface PropHasPromotions {
  hasPromotions: boolean;
}

export default function HasPromotions({
  hasPromotions,
}: PropHasPromotions): React.ReactElement {
  const iconSrc = hasPromotions ? '/icon/check.svg' : '/icon/x-mark.svg';
  const text = hasPromotions ? 'Yes' : 'No';
  const textColor = hasPromotions ? 'text-green-700' : 'text-red-700';

  return (
    <div className="flex items-center justify-center gap-1 text-sm font-medium">
      <Image src={iconSrc} alt="hasPromotions" width={16} height={16} />
      <span className={textColor}>{text}</span>
    </div>
  );
}
