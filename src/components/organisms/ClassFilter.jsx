import Button from "../atoms/Button";
import Checkbox from "../atoms/checkbox";

export default function ClassFilter() {
    return (
        <div className='sticky top-0 h-screen overflow-y-auto flex flex-col border-transparent rounded-2xl bg-white w-1/2 p-6'>
            <div className='text-[16px] font-bold pb-2.5'>
                Filter
            </div>

            <div className='mb-4'>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Paling Baru</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Paling Populer</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Promo</span>
                    </label>
                </div>
            </div>

            <div className='mb-4'>
                <div className='text-[16px] font-bold mb-2'>Kategori</div>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>UI/UX Design</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Data Science</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Back-End</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Fullstack</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Front-End</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Tech Lead</span>
                    </label>
                </div>
            </div>

            <div className='mb-4'>
                <div className='text-[16px] font-bold mb-2'>Level Kesulitan</div>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Beginner</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Advanced</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <Checkbox /> <span style={{color: '#202244'}} className=''>Intermediate</span>
                    </label>
                </div>
            </div>
            <div className="mx-auto mt-auto">
                <Button ButtonText="Hapus Filter" className="text-red-600 hover:text-red-800 font-semibold" />
            </div>
        </div>
    );
}

