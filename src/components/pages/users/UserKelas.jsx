import ClassTopic from "../../organisms/ClassTopic";
import ClassFilter from "../../organisms/ClassFilter";
import ClassType from "../../organisms/ClassType";

export default function ClassUser() {
  return (
      <div className="bg-[#EBF3FC]">
        <div className='justify-center items-center ml-[225px] mr-[215px]'>
        <ClassTopic />
            <div className='flex justify-between'>
                <ClassFilter/>
                <div className='juistify-between flex-col w-full ml-14'>
                    <ClassType/>
                </div>
            </div>
        </div>
        </div>
  )
}