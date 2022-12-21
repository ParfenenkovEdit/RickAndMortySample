type OriginLocation = {
  name: string;
  url: string;
};

type location = OriginLocation;

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocation;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
