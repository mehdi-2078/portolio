import { data } from './data';
import { Title } from '../../../components/common/title';
import { SkillItem } from '../../../components/skills/skillItem';

export const Skills = () => {
  return (
    <div className="w-[96%] md:w-[80%] mx-auto py-4 px-4 rounded shadow-2xl pt-[80px]">
      <Title text="My Skills" />
      <div className="flex flex-wrap justify-between">
        <SkillItem items={data} />
      </div>
    </div>
  );
};
