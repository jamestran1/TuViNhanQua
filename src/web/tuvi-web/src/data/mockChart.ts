import { TuViChart } from '../types/tuvi';

export const mockTuViChart: TuViChart = {
  metadata: {
    name: "Nguyễn Văn A",
    gender: "Male",
    birthDateSolar: "1990-01-01T10:30:00",
    birthDateLunar: "Canh Ngọ",
    element: "Lộ Bàng Thổ",
    cuc: "Hỏa Lục Cục"
  },
  palaces: Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: ["Mệnh", "Phụ", "Phúc", "Điền", "Quan", "Nô", "Di", "Tật", "Tài", "Tử", "Phu", "Huynh"][i],
    zodiacSign: ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"][i],
    isBodyPalace: i === 4,
    stars: [
      { name: i % 3 === 0 ? "Thất Sát" : "Tham Lang", type: "ChinhTinh", element: "Kim", status: "Miếu", isMajor: true },
      { name: "Hóa Lộc", type: "PhuTinh", element: "Mộc", isMajor: false },
      { name: "Địa Không", type: "PhuTinh", element: "Hỏa", isMajor: false }
    ]
  }))
};