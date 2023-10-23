import Duties from "./Duties";

const Jobs = ({ jobs, currentItem }) => {
    const { id, title, dates, duties, company } = jobs[currentItem]
    

  return (
    <article key={id} className="job-info">
      <h3>{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
export default Jobs