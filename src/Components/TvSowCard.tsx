

import { FC, useState } from 'react';
import { Show } from '../Models/Show';
import { Link } from 'react-router-dom';
import ImageNotFound from './ImageNotFound';
import { Cast } from '../Models/Cast';

interface TvSowCardProps {
  show: Show;
  cast: Cast[];
  
}

const TvSowCard: FC<TvSowCardProps> = ({ show, cast }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="w-72 flex flex-col ml-12 m-4 hover:shadow-2xl shadow-xl">
        {show.image ? (
          <img className="" src={show.image.medium} alt={show.name} />
        ) : (
          <ImageNotFound />
        )}

        <h1 className="p-2 text-m">{show.name}</h1>
        <p className="p-2 text-sm">{show.summary}</p>

        <div className="flex -space-x-4 mt-4">
          {cast.slice(0, 3).map((person, index) => (
            <img
              key={index}
              src={person.image?.medium}
              alt={person.name}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              title={person.name}
            />
          ))}
          {cast.length > 3 && (
            <div
              className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-medium cursor-pointer"
              onClick={handleToggleDropdown}
            >
              +{cast.length - 3}
            </div>
          )}
        </div>

        {showDropdown && (
          <div className="mt-2 bg-white shadow-md rounded-lg p-2">
            {cast.slice(3).map((person, index) => (
              <div key={index} className="flex items-center mt-2">
                <img
                  src={person.image?.medium}
                  alt={person.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <span className="ml-2 text-sm">{person.name}</span>
              </div>
            ))}
          </div>
        )}

        <span className="grow"></span>
        <Link
          to={'/ShowDetail/' + show.id}
          className="cursor-pointer p-4 w-32 border-black border-2 self-center mb-4 rounded-xl hover:bg-gray-500"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default TvSowCard;
