import React from 'react';

function UserInfo() {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold text-orange-600">Informasi Pribadi</h2>
      <form className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700">Nama Lengkap</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="John Doe" readOnly />
        </div>
        <div>
          <label className="block text-gray-700">Jenis Kelamin</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="Laki-laki" readOnly />
        </div>
        <div>
          <label className="block text-gray-700">Goals</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="Menurunkan Berat Badan" readOnly />
        </div>
        <div>
          <label className="block text-gray-700">Berat Badan</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="95 kg" readOnly />
        </div>
        <div>
          <label className="block text-gray-700">Tinggi Badan</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="175 cm" readOnly />
        </div>
        <div>
          <label className="block text-gray-700">Umur</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" value="25 tahun" readOnly />
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
