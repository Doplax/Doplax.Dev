const SkillCard = ({ title, skills }) => (
  <div className="mb-10">
    <div className="flex items-center py-4 text-xl">
      <h2 className="font-bold px-8 text-3xl text-gray-300">
        {title}
      </h2>
    </div>
    <div className="px-5 text-lg">
      <div className="flex flex-wrap  justify-center">{skills}</div>
    </div>
  </div>
);

export { SkillCard };
