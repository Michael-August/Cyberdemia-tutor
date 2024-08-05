import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

const Breadcrumb = ({
  breadcrumbsArray,
}: {
  breadcrumbsArray: { url: string; name: string }[];
}) => {
  return (
    <div className="flex items-center gap-3 mt-5">
      {breadcrumbsArray.map(
        (breadcrumb: { url: string; name: string }, index: number) => (
          <>
            {index !== breadcrumbsArray.length - 1 ? (
              <Link key={breadcrumb.name} href={breadcrumb.url}>
                <span className="text-[#0350C2B2] text-sm">
                  {breadcrumb.name}
                </span>
              </Link>
            ) : (
              <span className="text-sm">{breadcrumb.name}</span>
            )}
            {index < breadcrumbsArray.length - 1 && (
              <IoChevronForward size={14} className="text-[#0350C2B2]" />
            )}
          </>
        ),
      )}
    </div>
  );
};

export default Breadcrumb;
