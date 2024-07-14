import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { EducationDetails as EducationDetailsProps } from '@/lib/types';


const EducationDetails = ({
  classn,
  university,
  status,
  currentlyHere,
  startDate,
  endDate,
  marks,
}: EducationDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="flex flex-col gap-4 max-md:order-3 md:w-3/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {classn}{' '}({status})
        </Typography>
        <Typography className="font-semibold text-gray-600">
          {university}
        </Typography>
        <Typography className="text-gray-800">
        {marks}
        </Typography>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {startDate} - {currentlyHere ? 'Present' : endDate}
        </Typography>
      </div>
    </Card>
  );
};

export default EducationDetails;
