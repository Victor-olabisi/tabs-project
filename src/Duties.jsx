import { FaAngleDoubleRight } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid'
const Duties = ({ duties }) => {
  return (
    <div>
          {duties.map((duty) => {
          const id = uuidv4()
        return (
          <div className="job-desc" key={id}>
            <button className="job-icon">
              <FaAngleDoubleRight />
            </button>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
