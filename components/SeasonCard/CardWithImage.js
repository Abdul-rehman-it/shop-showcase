import React from "react";
import SeasonCard from "../Cards/SeasonCard";

const SeasonSection = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-[-300px]">
      {/* Parent container */}
      <div className="flex items-center space-x-0">
        {/* Gray bar div with z-0 */}
        <div className="flex items-center bg-[rgb(170,163,149)] h-[300px] w-[50px] z-0 text-3xl">
          <span className="ml-4">&larr;</span>
        </div>

        {/* Card content div */}
        <SeasonCard />

        {/* Image div with z-10 */}
        <div className="shadow-md z-10 -ml-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/fcd6/ef4e/e29581892f3245f6fe537658df086bac?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-QA~mzCCxYE4Ar2xB~DQzhYxG2c05lXZeqJ18aCjFQyZLiLqUKpbOMZJs~k6qgvMIIxbiwsbJnAZ7xYp5USGIU0VvWIwsFvk5xPLUSv1ERz4Et9hyi0IjzQpOgPRyA-Np2MxJhW4I3Nx1nIqDofFvX8mtipWFBxMCTWqwFtSm5y7VBxZ4LgvvwkVdoMz6596YJYV6JeADDzQPfnFl5rlzMf2xHBh2rJshy~sxlFuN4G-eUijv8bBf1kiYlG9yuJcne6X92R0EeBnkKhM0uAc~Hy9FoLfB5Y6w2DRf~g8B0WEk3w1sifuqVeW9adeBgQd~gSjvi6iZJQkckFLcxWeg__"
            alt="Descriptive"
            className="hidden md:block w-[600px] h-[350px] object-cover" // Hide on mobile, show on md and larger
          />
        </div>
      </div>
    </div>
  );
};

export default SeasonSection;
