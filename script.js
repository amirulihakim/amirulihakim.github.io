const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

const textPairs = [
  ['Home', 'Beranda'],
  ['Experience', 'Pengalaman'],
  ['Projects', 'Proyek'],
  ['Contact', 'Kontak'],
  ['ENGINEERING PORTFOLIO', 'PORTOFOLIO ENGINEERING'],
  ['Mechanical Engineer · Industrial Automation · IIoT · Mechatronics', 'Mechanical Engineer · Otomasi Industri · IIoT · Mekatronika'],
  ['I build at the intersection of mechanical systems, industrial data, and automation — from CAD and manufacturing documentation to instrumentation, SQL-backed monitoring, PLC systems, and robotics.', 'Saya membangun solusi di pertemuan sistem mekanik, data industri, dan otomasi - dari CAD dan dokumentasi manufaktur hingga instrumentasi, monitoring berbasis SQL, sistem PLC, dan robotika.'],
  ['View projects', 'Lihat proyek'],
  ['Resume', 'Resume'],
  ['CURRENT FOCUS', 'FOKUS SAAT INI'],
  ['PROFILE', 'PROFIL'],
  ['Engineering across physical and digital systems.', 'Engineering yang menghubungkan sistem fisik dan digital.'],
  ['My background began in mechanical drafting and manufacturing-oriented engineering, then expanded through industrial instrumentation, data acquisition, and monitoring. I am now developing deeper capability in PLC automation and robotics while keeping mechanical engineering as the physical foundation of my work.', 'Latar belakang saya dimulai dari drafting mekanik dan engineering berorientasi manufaktur, lalu berkembang ke instrumentasi industri, akuisisi data, dan monitoring. Saat ini saya memperdalam kemampuan di otomasi PLC dan robotika sambil tetap menjadikan mechanical engineering sebagai fondasi fisik pekerjaan saya.'],
  ['EXPERIENCE', 'PENGALAMAN'],
  ['Undergraduate Research', 'Riset Sarjana'],
  ['Conducted experimental micro-milling research on CP Titanium, evaluating feed-rate effects on burr height and dimensional accuracy using digital microscopy and ImageJ.', 'Melakukan riset eksperimental micro-milling pada CP Titanium dengan mengevaluasi pengaruh feed rate terhadap tinggi burr dan akurasi dimensi menggunakan mikroskop digital dan ImageJ.'],
  ['HVAC Manufacturing', 'Manufaktur HVAC'],
  ['Manufacturing Engineering Intern', 'Magang Engineering Manufaktur'],
  ['Analyzed sheet-metal HVAC production, developed process documentation, and investigated fixture improvements for welding and assembly operations.', 'Menganalisis produksi sheet-metal HVAC, mengembangkan dokumentasi proses, dan menyelidiki peningkatan fixture untuk operasi pengelasan dan perakitan.'],
  ['Maintenance & Instrumentation Intern', 'Magang Maintenance & Instrumentasi'],
  ['Worked on industrial instrumentation, process monitoring, PLC-based utility systems, and MEP support within plant maintenance.', 'Mengerjakan instrumentasi industri, pemantauan proses, sistem utilitas berbasis PLC, dan dukungan MEP dalam maintenance pabrik.'],
  ['Machining & Fabrication', 'Pemesinan & Fabrikasi'],
  ['Mechanical Drafter', 'Drafter Mekanik'],
  ['Produced manufacturing drawings and 3D CAD models for machined and fabricated components while supporting drawing revisions and shop-floor production.', 'Membuat gambar manufaktur dan model CAD 3D untuk komponen hasil pemesinan dan fabrikasi serta mendukung revisi gambar dan produksi di lantai kerja.'],
  ['Selected experience', 'Pengalaman pilihan'],
  ['Real work first. Projects support the story rather than replace it.', 'Pengalaman nyata lebih dulu. Proyek mendukung cerita, bukan menggantikannya.'],
  ['Industrial Internship', 'Magang Industri'],
  ['Industrial Monitoring & Data Acquisition', 'Monitoring Industri & Akuisisi Data'],
  ['Developed a real-time and historical monitoring workflow for industrial process data, working with Modbus/RS-485 acquisition, MQTT communication, SQL storage, and dashboard visualization.', 'Mengembangkan alur monitoring real-time dan historis untuk data proses industri, mencakup akuisisi Modbus/RS-485, komunikasi MQTT, penyimpanan SQL, dan visualisasi dashboard.'],
  ['Professional Experience', 'Pengalaman Profesional'],
  ['Mechanical Drafting & Manufacturing Documentation', 'Drafting Mekanik & Dokumentasi Manufaktur'],
  ['Produced mechanical models and technical drawings for manufacturing-oriented work, including assemblies, components, fabrication details, and design documentation.', 'Membuat model mekanik dan gambar teknik untuk pekerjaan berorientasi manufaktur, termasuk assembly, komponen, detail fabrikasi, dan dokumentasi desain.'],
  ['Research', 'Riset'],
  ['Mechanical Engineering', 'Teknik Mesin'],
  ['Micro-Milling of CP Titanium Implant Geometry', 'Micro-Milling Geometri Implan CP Titanium'],
  ['Investigated the effect of machining parameters on burr formation and dimensional accuracy, combining CAD/CAM, CNC machining, metrology, image analysis, and experimental data interpretation.', 'Meneliti pengaruh parameter pemesinan terhadap pembentukan burr dan akurasi dimensi, dengan menggabungkan CAD/CAM, CNC machining, metrologi, analisis gambar, dan interpretasi data eksperimen.'],
  ['PROJECTS', 'PROYEK'],
  ['Selected engineering work', 'Karya engineering pilihan'],
  ['PT Timah Industrial Monitoring Dashboard', 'Dashboard Monitoring Industri PT Timah'],
  ['WTP PLC Control & Monitoring', 'Kontrol & Monitoring PLC WTP'],
  ['CP Titanium Micro-Milling Thesis', 'Tesis Micro-Milling CP Titanium'],
  ['Centralized acquisition of industrial flow measurements for real-time and historical monitoring through an engineering dashboard.', 'Akuisisi terpusat untuk pengukuran aliran industri serta pemantauan real-time dan historis melalui dashboard engineering.'],
  ['Industrial WTP control-system implementation integrating pH/TDS instrumentation, circulation, soda-ash dosing, and PLC/HMI supervision.', 'Implementasi sistem kontrol WTP industri yang mengintegrasikan instrumentasi pH/TDS, sirkulasi, dosing soda ash, dan supervisi PLC/HMI.'],
  ['Feed-rate investigation in micro-milling a CP Titanium I-Plate implant, focused on dimensional accuracy and burr formation.', 'Investigasi feed rate pada proses micro-milling implan I-Plate berbahan CP Titanium, dengan fokus pada akurasi dimensi dan pembentukan burr.'],
  ['Each project is presented as an engineering case study: problem, decisions, implementation, and validation.', 'Setiap proyek disajikan sebagai studi kasus engineering: masalah, keputusan, implementasi, dan validasi.'],
  ['All', 'Semua'],
  ['Industrial Systems', 'Sistem Industri'],
  ['Mechanical', 'Mekanik'],
  ['In Development', 'Dalam Pengembangan'],
  ['Completed', 'Selesai'],
  ['Planned', 'Direncanakan'],
  ['Real-time process monitoring from industrial measurement to MQTT, SQL history, and dashboard visualization.', 'Monitoring proses real-time dari pengukuran industri ke MQTT, histori SQL, dan visualisasi dashboard.'],
  ['Centralized Data Acquisition and Monitoring System', 'Sistem Akuisisi dan Pemantauan Data Terpusat'],
  ['Centralized industrial instrumentation monitoring developed during my PT Timah Industri internship, integrating Modbus RS-485, ESP32, MQTT, database storage, and web visualization.', 'Monitoring instrumentasi industri terpusat yang dikembangkan selama magang saya di PT Timah Industri, mengintegrasikan Modbus RS-485, ESP32, MQTT, penyimpanan database, dan visualisasi web.'],
  ['PT Timah Industri · Internship Project', 'PT Timah Industri · Proyek Magang'],
  ['Centralized monitoring of industrial flowmeter measurements for improved visibility of operational data and historical trends.', 'Sistem monitoring terpusat untuk mengintegrasikan pengukuran flowmeter industri serta mempermudah pemantauan data operasional dan tren historis.'],
  ['Launch Live Demo', 'Buka Live Demo'],
  ['Explore Project', 'Lihat Proyek'],
  ['System overview', 'Gambaran sistem'],
  ['Internship', 'Magang'],
  ['Field instrument', 'Instrumen lapangan'],
  ['Web dashboard', 'Dashboard web'],
  ['Mechanical Engineering Intern', 'Magang Teknik Mesin'],
  ['Maintenance Department', 'Departemen Perawatan'],
  ['Industrial Instrumentation & Monitoring', 'Instrumentasi & Monitoring Industri'],
  ['The challenge', 'Tantangan'],
  ['From isolated readings to shared visibility.', 'Dari pembacaan terpisah menuju monitoring terpusat.'],
  ['Flowmeter measurements were available at individual instruments and control-panel locations, limiting convenient centralized observation and historical analysis. The project explored a data-acquisition and monitoring architecture capable of bringing these measurements into a unified digital interface.', 'Data flowmeter sebelumnya tersedia pada masing-masing instrumen dan lokasi panel kontrol sehingga pemantauan terpusat dan analisis historis menjadi terbatas. Proyek ini mengembangkan konsep akuisisi dan monitoring data untuk mengintegrasikan pengukuran tersebut ke dalam satu antarmuka digital.'],
  ['Installed flowmeter units used in the monitoring context.', 'Unit flowmeter terpasang yang digunakan dalam konteks monitoring.'],
  ['My role & contribution', 'Peran & Kontribusi Saya'],
  ['Studied available flowmeter parameters and communication interfaces', 'Mempelajari parameter flowmeter dan antarmuka komunikasi yang tersedia'],
  ['Worked with Modbus RTU over RS-485 for communication and testing', 'Menggunakan Modbus RTU melalui RS-485 untuk komunikasi dan pengujian instrumen'],
  ['Developed an ESP32-based acquisition concept', 'Mengembangkan konsep akuisisi data berbasis ESP32'],
  ['Built the MQTT/network data flow', 'Membangun alur transmisi data melalui MQTT dan jaringan'],
  ['Structured timestamped sensor storage with MySQL', 'Menyusun penyimpanan data sensor bertimestamp menggunakan MySQL'],
  ['Developed real-time and historical web visualization', 'Mengembangkan visualisasi web real-time dan historis'],
  ['Integrated multiple monitored locations into one interface', 'Mengintegrasikan beberapa titik monitoring dalam satu antarmuka'],
  ['Tested and documented the monitoring concept', 'Menguji dan mendokumentasikan konsep sistem monitoring'],
  ['System architecture', 'Arsitektur Sistem'],
  ['Measurement to decision support.', 'Dari pengukuran hingga informasi untuk monitoring.'],
  ['A connected internship implementation spanning field communication, acquisition, transport, storage, and browser visualization.', 'Implementasi terintegrasi yang mencakup komunikasi instrumen, akuisisi data, transmisi, penyimpanan, dan visualisasi berbasis web.'],
  ['Instrument', 'Instrumen'],
  ['Acquisition', 'Akuisisi'],
  ['Network', 'Jaringan'],
  ['Processing', 'Pemrosesan'],
  ['Database', 'Database'],
  ['Live + history', 'Real-Time + Historis'],
  ['Monitored parameters', 'Parameter yang Dimonitor'],
  ['One view of the process.', 'Satu tampilan untuk berbagai parameter proses.'],
  ['The interface grouped core measurements and totalizers into a consistent monitoring view.', 'Antarmuka mengintegrasikan parameter pengukuran utama dan totalizer dalam satu tampilan monitoring.'],
  ['Flow Rate', 'Laju Aliran'],
  ['Flow Velocity', 'Kecepatan Aliran'],
  ['Flow Percentage', 'Persentase Aliran'],
  ['Instant Heat', 'Kalor Sesaat'],
  ['Inlet Temperature', 'Temperatur Masuk'],
  ['Outlet Temperature', 'Temperatur Keluar'],
  ['Positive Total', 'Total Positif'],
  ['Negative Total', 'Total Negatif'],
  ['Heating Total', 'Total Pemanasan'],
  ['Cooling Total', 'Total Pendinginan'],
  ['Dashboard implementation', 'Implementasi Dashboard'],
  ['Real-time status and historical review.', 'Monitoring real-time dan peninjauan data historis.'],
  ['The web interface consolidated multiple flowmeter parameters into a centralized monitoring view and provided both real-time visualization and selectable historical ranges.', 'Antarmuka web mengintegrasikan berbagai parameter flowmeter dalam satu sistem monitoring serta menyediakan visualisasi real-time dan pemilihan rentang data historis.'],
  ['Main dashboard / overview', 'Dashboard utama / gambaran umum'],
  ['Historical record / reporting view', 'Monitoring data historis'],
  ['Original internship-context dashboard evidence.', 'Bukti dashboard dalam konteks kegiatan magang.'],
  ['Original monitoring dashboard developed during my internship at PT Timah Industri. These screenshots document the internship-era interface and are distinct from the reconstructed public live demo.', 'Dashboard monitoring asli yang dikembangkan selama kegiatan magang di PT Timah Industri. Tangkapan layar ini mendokumentasikan antarmuka pada masa magang dan berbeda dari rekonstruksi demo publik.'],
  ['Project outcome & experience', 'Hasil Proyek & Pengalaman'],
  ['An end-to-end industrial monitoring experience.', 'Pengalaman membangun sistem monitoring industri secara menyeluruh.'],
  ['The project produced a functional prototype for centralized acquisition, storage, and visualization of industrial flowmeter data. It demonstrated a complete data path from industrial instrumentation and digital communication to database storage and browser-based monitoring.', 'Proyek ini menghasilkan prototipe fungsional untuk akuisisi, penyimpanan, dan visualisasi data flowmeter industri secara terpusat. Sistem mendemonstrasikan alur data lengkap mulai dari instrumentasi dan komunikasi digital hingga penyimpanan database dan monitoring berbasis web.'],
  ['The work provided practical experience connecting mechanical and industrial instrumentation with embedded systems, Modbus communication, MQTT, databases, and web-based engineering interfaces.', 'Proyek ini memberikan pengalaman praktis dalam mengintegrasikan instrumentasi mekanikal dan industri dengan embedded system, komunikasi Modbus, MQTT, database, serta antarmuka monitoring berbasis web.'],
  ['Live demo · synthetic data', 'Live demo · data sintetis'],
  ['Explore the Live Monitoring Demo', 'Jelajahi Demo Monitoring Langsung'],
  ['An interactive demonstration of the monitoring concept is available using synthetic telemetry generated by a physical ESP32.', 'Demo interaktif sistem monitoring tersedia menggunakan telemetri sintetis yang dihasilkan oleh ESP32 fisik.'],
  ['Portfolio reconstruction demo: ESP32 publishing synthetic telemetry to the public dashboard.', 'Demo rekonstruksi portofolio: ESP32 mengirimkan telemetri sintetis ke dashboard publik.'],
  ['Portfolio disclosure:', 'Pernyataan portofolio:'],
  ['The live demo uses synthetic telemetry and is not connected to PT Timah Industri infrastructure.', 'Demo publik menggunakan telemetri sintetis dan tidak terhubung dengan infrastruktur PT Timah Industri.'],
  ['Research · Manufacturing', 'Riset · Manufaktur'],
  ['Feed-Rate Optimization in CP Titanium Micro-Milling', 'Optimasi Feed Rate pada Micro-Milling CP Titanium'],
  ['Experimental study of dimensional accuracy, burr formation, cutting temperature, and chip characteristics in a CP Titanium I-Plate geometry.', 'Studi eksperimen akurasi dimensi, pembentukan burr, temperatur pemotongan, dan karakteristik geram pada geometri I-Plate CP Titanium.'],
  ['Mechanical Design', 'Desain Mekanik'],
  ['Modular Roller Conveyor', 'Roller Conveyor Modular'],
  ['Assembly modeling and production documentation for straight, curved, roller, frame, and connection systems.', 'Pemodelan assembly dan dokumentasi produksi untuk sistem straight, curved, roller, frame, dan koneksi.'],
  ['IIoT · Data', 'IIoT · Data'],
  ['Smart Workshop Monitoring', 'Monitoring Smart Workshop'],
  ['Low-cost ESP32 monitoring platform with MQTT transport, SQL historian, event logging, and automated analysis.', 'Platform monitoring ESP32 berbiaya rendah dengan transport MQTT, historian SQL, event logging, dan analisis otomatis.'],
  ['Automation', 'Otomasi'],
  ['PLC Process Automation', 'Otomasi Proses PLC'],
  ['Process simulation focused on PLC sequencing, interlocks, alarms, HMI, fault handling, and commissioning logic.', 'Simulasi proses yang berfokus pada sequencing PLC, interlock, alarm, HMI, penanganan fault, dan logika commissioning.'],
  ['Robotics', 'Robotika'],
  ['Robotic Arm Platform', 'Platform Lengan Robot'],
  ['Long-form mechatronics project integrating mechanical design, embedded control, ROS2, and motion planning.', 'Proyek mekatronika jangka panjang yang mengintegrasikan desain mekanik, embedded control, ROS2, dan motion planning.'],
  ['Let’s talk engineering.', 'Mari bicara engineering.'],
  ['Built with HTML, CSS & a little JavaScript.', 'Dibuat dengan HTML, CSS & sedikit JavaScript.'],
  ['Engineering Portfolio', 'Portofolio Engineering'],
  ['Industrial Systems / Completed', 'Sistem Industri / Selesai'],
  ['Research / Manufacturing / Completed', 'Riset / Manufaktur / Selesai'],
  ['Mechanical Design / Completed', 'Desain Mekanik / Selesai'],
  ['IIoT / Data / In Development', 'IIoT / Data / Dalam Pengembangan'],
  ['Automation / In Development', 'Otomasi / Dalam Pengembangan'],
  ['Robotics / Planned', 'Robotika / Direncanakan'],
  ['Back to projects', 'Kembali ke proyek'],
  ['← Back to projects', '← Kembali ke proyek'],
  ['Problem', 'Masalah'],
  ['Approach', 'Pendekatan'],
  ['Outcome', 'Hasil'],
  ['Goal', 'Tujuan'],
  ['Planned Approach', 'Rencana Pendekatan'],
  ['Portfolio Value', 'Nilai Portofolio'],
  ['Role', 'Peran'],
  ['Focus', 'Fokus'],
  ['Status', 'Status'],
  ['Tools', 'Tools'],
  ['Industrial internship', 'Magang industri'],
  ['Data acquisition', 'Akuisisi data'],
  ['A real-time and historical process monitoring workflow that connects industrial measurement, Modbus/RS-485 acquisition, MQTT transport, SQL storage, and dashboard visualization.', 'Alur monitoring proses real-time dan historis yang menghubungkan pengukuran industri, akuisisi Modbus/RS-485, transport MQTT, penyimpanan SQL, dan visualisasi dashboard.'],
  ['Industrial process data is most useful when operators can see live values and review historical behavior. The project focused on building a monitoring flow that could bridge field-side instrumentation with a data system suitable for dashboards and later analysis.', 'Data proses industri paling berguna saat operator dapat melihat nilai langsung dan meninjau perilaku historis. Proyek ini berfokus membangun alur monitoring yang menjembatani instrumentasi lapangan dengan sistem data untuk dashboard dan analisis lanjutan.'],
  ['Acquired process values through Modbus over RS-485.', 'Mengakuisisi nilai proses melalui Modbus over RS-485.'],
  ['Transported readings through MQTT for lightweight industrial messaging.', 'Mengirim pembacaan melalui MQTT untuk komunikasi industri yang ringan.'],
  ['Stored historical records in MySQL for traceability and analysis.', 'Menyimpan rekaman historis di MySQL untuk traceability dan analisis.'],
  ['Used Node-RED to coordinate data movement and dashboard presentation.', 'Menggunakan Node-RED untuk mengatur perpindahan data dan presentasi dashboard.'],
  ['The project became a complete IIoT case study: field measurement, communication, database history, and visualization. It is one of the strongest portfolio examples because it shows both industrial context and digital systems thinking.', 'Proyek ini menjadi studi kasus IIoT yang lengkap: pengukuran lapangan, komunikasi, histori database, dan visualisasi. Ini menjadi salah satu contoh portofolio terkuat karena menunjukkan konteks industri sekaligus cara berpikir sistem digital.'],
  ['All projects', 'Semua proyek'],
  ['Next: Feed-Rate Optimization in CP Titanium Micro-Milling', 'Berikutnya: Optimasi Feed Rate pada Micro-Milling CP Titanium'],
  ['Previous: PT Timah', 'Sebelumnya: PT Timah'],
  ['Next: Modular Roller Conveyor', 'Berikutnya: Roller Conveyor Modular'],
  ['Previous: CP Titanium Micro-Milling', 'Sebelumnya: Micro-Milling CP Titanium'],
  ['Next: Smart Workshop Monitoring', 'Berikutnya: Monitoring Smart Workshop'],
  ['Previous: Conveyor', 'Sebelumnya: Conveyor'],
  ['Next: PLC Process Automation', 'Berikutnya: Otomasi Proses PLC'],
  ['Previous: Smart Workshop', 'Sebelumnya: Smart Workshop'],
  ['Next: Robotic Arm Platform', 'Berikutnya: Platform Lengan Robot'],
  ['Previous: PLC Automation', 'Sebelumnya: Otomasi PLC'],
  ['Research project', 'Proyek riset'],
  ['Micro-machining', 'Micro-machining'],
  ['An experimental manufacturing study investigating burr formation and dimensional accuracy during micro-machining of a CP-titanium implant geometry.', 'Studi manufaktur eksperimental yang meneliti pembentukan burr dan akurasi dimensi selama micro-machining geometri implan CP-titanium.'],
  ['Micro-machining titanium requires careful parameter control because small changes can affect burr height and dimensional accuracy. The study treated machining quality as a measurable engineering problem rather than a purely visual result.', 'Micro-machining titanium membutuhkan kontrol parameter yang cermat karena perubahan kecil dapat memengaruhi tinggi burr dan akurasi dimensi. Studi ini memperlakukan kualitas pemesinan sebagai masalah engineering yang terukur, bukan sekadar hasil visual.'],
  ['Prepared the implant geometry through CAD/CAM workflow.', 'Menyiapkan geometri implan melalui alur kerja CAD/CAM.'],
  ['Used CNC micro-milling to machine CP-titanium samples.', 'Menggunakan CNC micro-milling untuk memproses sampel CP-titanium.'],
  ['Measured burr formation and dimensional accuracy through metrology and image analysis.', 'Mengukur pembentukan burr dan akurasi dimensi melalui metrologi dan analisis gambar.'],
  ['Interpreted experimental results against machining parameter choices.', 'Menginterpretasikan hasil eksperimen terhadap pilihan parameter pemesinan.'],
  ['This project demonstrates research discipline, manufacturing awareness, and the ability to connect CAD/CAM preparation with physical machining results and measurement-backed analysis.', 'Proyek ini menunjukkan disiplin riset, pemahaman manufaktur, dan kemampuan menghubungkan persiapan CAD/CAM dengan hasil pemesinan fisik serta analisis berbasis pengukuran.'],
  ['CAD drafting', 'Drafting CAD'],
  ['Assembly modeling and production documentation for straight, curved, roller, frame, and connection systems used in a modular conveyor design.', 'Pemodelan assembly dan dokumentasi produksi untuk sistem straight, curved, roller, frame, dan koneksi pada desain conveyor modular.'],
  ['Manufacturing-oriented mechanical design needs clear models, drawings, assemblies, and documentation. The conveyor project focused on making a modular system understandable enough for production and reuse.', 'Desain mekanik berorientasi manufaktur membutuhkan model, gambar, assembly, dan dokumentasi yang jelas. Proyek conveyor ini berfokus membuat sistem modular yang mudah dipahami untuk produksi dan penggunaan ulang.'],
  ['Modeled straight and curved conveyor assemblies.', 'Memodelkan assembly conveyor straight dan curved.'],
  ['Detailed roller, frame, and connection components.', 'Mendetailkan komponen roller, frame, dan koneksi.'],
  ['Prepared drawing documentation for fabrication and assembly communication.', 'Menyiapkan dokumentasi gambar untuk fabrikasi dan komunikasi assembly.'],
  ['Organized part relationships and BOM-ready information.', 'Mengorganisasi relasi part dan informasi yang siap untuk BOM.'],
  ['The project shows practical mechanical drafting strength: translating an assembly concept into usable manufacturing documentation with attention to components, interfaces, and build clarity.', 'Proyek ini menunjukkan kekuatan drafting mekanik praktis: menerjemahkan konsep assembly menjadi dokumentasi manufaktur yang dapat digunakan, dengan perhatian pada komponen, interface, dan kejelasan build.'],
  ['Personal build', 'Proyek pribadi'],
  ['Condition monitoring', 'Condition monitoring'],
  ['The goal is to build a workshop monitoring platform that can collect equipment or environment signals, log events, store historical readings, and make the data useful through dashboards and automated analysis.', 'Tujuannya adalah membangun platform monitoring workshop yang dapat mengumpulkan sinyal peralatan atau lingkungan, mencatat event, menyimpan pembacaan historis, dan membuat data berguna melalui dashboard serta analisis otomatis.'],
  ['Use ESP32-based nodes for affordable sensor acquisition.', 'Menggunakan node berbasis ESP32 untuk akuisisi sensor yang terjangkau.'],
  ['Send readings through MQTT for lightweight data transport.', 'Mengirim pembacaan melalui MQTT untuk transport data yang ringan.'],
  ['Store readings and events in a SQL historian.', 'Menyimpan pembacaan dan event dalam historian SQL.'],
  ['Build a dashboard that supports live status, trends, and maintenance signals.', 'Membangun dashboard yang mendukung status live, tren, dan sinyal maintenance.'],
  ['This project extends the industrial monitoring experience into a personal build that can demonstrate prototyping, data architecture, and practical condition-monitoring logic.', 'Proyek ini memperluas pengalaman monitoring industri menjadi build pribadi yang menunjukkan prototyping, arsitektur data, dan logika condition monitoring yang praktis.'],
  ['Automation learner-builder', 'Automation learner-builder'],
  ['Process control', 'Kontrol proses'],
  ['The project is intended to show automation thinking beyond basic ladder logic: clear operating states, sequence control, protective interlocks, alarm behavior, HMI feedback, and repeatable commissioning tests.', 'Proyek ini ditujukan untuk menunjukkan cara berpikir otomasi di luar ladder logic dasar: state operasi yang jelas, kontrol sequence, interlock protektif, perilaku alarm, feedback HMI, dan pengujian commissioning yang dapat diulang.'],
  ['Define a process scenario with normal, manual, fault, and reset states.', 'Mendefinisikan skenario proses dengan state normal, manual, fault, dan reset.'],
  ['Implement sequencing and permissive logic in PLC software.', 'Mengimplementasikan sequencing dan permissive logic di software PLC.'],
  ['Design HMI screens for status, commands, alarms, and diagnostics.', 'Mendesain layar HMI untuk status, command, alarm, dan diagnostik.'],
  ['Validate behavior through simulation and documented test cases.', 'Memvalidasi perilaku melalui simulasi dan test case terdokumentasi.'],
  ['This page will become the automation proof point of the portfolio, showing how mechanical and instrumentation understanding can translate into control-system design.', 'Halaman ini akan menjadi bukti kemampuan otomasi dalam portofolio, menunjukkan bagaimana pemahaman mekanik dan instrumentasi dapat diterjemahkan menjadi desain sistem kontrol.'],
  ['Personal roadmap', 'Roadmap pribadi'],
  ['Mechatronics', 'Mekatronika'],
  ['A long-form mechatronics project planned around mechanical design, embedded control, ROS2 integration, and motion planning.', 'Proyek mekatronika jangka panjang yang direncanakan di sekitar desain mekanik, embedded control, integrasi ROS2, dan motion planning.'],
  ['The project is planned as a long-form portfolio build that connects mechanical design, embedded electronics, software control, and robotic motion into one integrated platform.', 'Proyek ini direncanakan sebagai build portofolio jangka panjang yang menghubungkan desain mekanik, embedded electronics, kontrol software, dan gerak robotik ke dalam satu platform terintegrasi.'],
  ['Design a printable or machinable robotic arm structure.', 'Mendesain struktur lengan robot yang dapat dicetak 3D atau dimesin.'],
  ['Select actuators, sensors, and embedded control hardware.', 'Memilih aktuator, sensor, dan hardware embedded control.'],
  ['Develop low-level control and communication around ESP32-class hardware.', 'Mengembangkan kontrol low-level dan komunikasi pada hardware kelas ESP32.'],
  ['Integrate the platform with ROS2 for motion planning and system coordination.', 'Mengintegrasikan platform dengan ROS2 untuk motion planning dan koordinasi sistem.'],
  ['This planned project points toward the long game: using mechanical engineering as the base for robotics, automation, and intelligent physical systems.', 'Proyek rencana ini mengarah ke long game: menggunakan mechanical engineering sebagai dasar untuk robotika, otomasi, dan sistem fisik cerdas.']
];

const wtpTextPairs = [
  ['Water Treatment Plant PLC & HMI Automation', 'Otomasi PLC & HMI Water Treatment Plant'],
  ['PLC/HMI-based monitoring and control system for an industrial Water Treatment Plant at PT Timah Industri, integrating pH and TDS instrumentation, automated chemical dosing, circulation control, and hardwired tank-refill logic.', 'Sistem monitoring dan kontrol berbasis PLC/HMI untuk Water Treatment Plant industri di PT Timah Industri, yang mengintegrasikan instrumentasi pH dan TDS, dosing kimia otomatis, kontrol sirkulasi, serta logika hardwired untuk pengisian tangki.'],
  ['System overview', 'Ikhtisar Sistem'],
  ['Automation project', 'Proyek otomasi'],
  ['Process Measurement', 'Pengukuran Proses'],
  ['pH and TDS instrumentation provide plant measurements.', 'Instrumentasi pH dan TDS menyediakan pengukuran proses plant.'],
  ['PLC/HMI Control', 'Kontrol PLC/HMI'],
  ['Autonics LP-A070 supervises monitoring and control logic.', 'Autonics LP-A070 menjalankan fungsi monitoring dan logika kontrol.'],
  ['Process Actuation', 'Aktuasi Proses'],
  ['Circulation, chemical dosing, and hardwired refill affect the process.', 'Sirkulasi, dosing kimia, dan sistem pengisian hardwired memengaruhi proses.'],
  ['Problem & System Development', 'Permasalahan & Pengembangan Sistem'],
  ['From manual treatment to coordinated control.', 'Dari pengolahan manual menuju kontrol yang terkoordinasi.'],
  ['Operation was substantially manual, pH adjustment relied on soda ash, and process visibility was limited. The project added pH/TDS instrumentation, circulation, dosing, and coordinated PLC/HMI control.', 'Operasi sebelumnya sebagian besar masih manual, penyesuaian pH menggunakan soda ash, dan visibilitas proses terbatas. Proyek ini menambahkan instrumentasi pH/TDS, sirkulasi, dosing, serta kontrol PLC/HMI yang terkoordinasi.'],
  ['Background', 'Latar Belakang'],
  ['Manual WTP operation with chemical adjustment for boiler-feed-water pH.', 'Operasi WTP manual dengan penyesuaian kimia untuk pH air umpan boiler.'],
  ['Problem', 'Permasalahan'],
  ['Limited monitoring and inconsistent, repetitive process handling.', 'Monitoring terbatas serta penanganan proses yang berulang dan tidak konsisten.'],
  ['Result', 'Hasil'],
  ['Added circulation, instrumentation, PLC/HMI supervision, and more coordinated operation.', 'Menambahkan sirkulasi, instrumentasi, supervisi PLC/HMI, dan operasi yang lebih terkoordinasi.'],
  ['Control wiring during project implementation.', 'Wiring kontrol selama implementasi proyek.'],
  ['Before / After', 'Sebelum / Sesudah'],
  ['Process Development', 'Pengembangan Proses'],
  ['The modification added circulation, pH/TDS instrumentation, soda-ash dosing, and control integration.', 'Modifikasi menambahkan sirkulasi, instrumentasi pH/TDS, dosing soda ash, dan integrasi kontrol.'],
  ['Before', 'Sebelum'],
  ['After', 'Sesudah'],
  ['The original arrangement was mostly manual; the modified process added circulation, pH/TDS instrumentation, soda-ash dosing, and integrated control.', 'Susunan awal sebagian besar masih manual; proses hasil modifikasi menambahkan sirkulasi, instrumentasi pH/TDS, dosing soda ash, dan kontrol terintegrasi.'],
  ['System Architecture & Control', 'Arsitektur & Kontrol Sistem'],
  ['Measurement, logic, and process actuation.', 'Pengukuran, logika, dan aktuasi proses.'],
  ['Measurement', 'Pengukuran'],
  ['pH and Supmea TDS instruments communicate through RS485 / Modbus RTU.', 'Instrumen pH dan TDS Supmea berkomunikasi melalui RS485 / Modbus RTU.'],
  ['Autonics LP-A070-T9D6 supervises the process; D100 stores pH PV and D101 stores its setpoint.', 'Autonics LP-A070-T9D6 mengawasi proses; D100 menyimpan nilai proses pH dan D101 menyimpan setpoint.'],
  ['Process control', 'Kontrol proses'],
  ['Dosing is enabled below the pH setpoint and circulation promotes mixing. TDS is monitored, not presented as closed-loop control.', 'Dosing aktif ketika pH berada di bawah setpoint dan sirkulasi membantu pencampuran. TDS dipantau, bukan ditampilkan sebagai kontrol closed-loop.'],
  ['Refill', 'Pengisian ulang'],
  ['Low/high float switches, relays, and a solenoid valve form an independent hardwired circuit.', 'Float switch level rendah/tinggi, relay, dan katup solenoid membentuk rangkaian hardwired yang independen.'],
  ['PLC Logic & HMI', 'Logika PLC & HMI'],
  ['Control logic and operator interface.', 'Logika kontrol dan antarmuka operator.'],
  ['The simplified logic preserves the visible sensor-derived internal states, the Motor 4 start/stop latch, and the pH comparison used for dosing.', 'Logika yang disederhanakan mempertahankan state internal dari sensor yang terlihat, latch start/stop Motor 4, serta perbandingan pH yang digunakan untuk dosing.'],
  ['D00100 is the pH process value and D00101 is the setpoint. No additional meaning is assigned to partially obscured labels.', 'D00100 adalah nilai proses pH dan D00101 adalah setpoint. Tidak ada pemaknaan tambahan untuk label yang sebagian tertutup.'],
  ['Simplified PLC logic reconstructed from the implemented online program view.', 'Logika PLC sederhana yang direkonstruksi dari tampilan program online yang telah diimplementasikan.'],
  ['Process overview', 'Ikhtisar Proses'],
  ['Overall WTP status and operator monitoring screen.', 'Layar status WTP secara keseluruhan dan monitoring operator.'],
  ['pH control', 'Kontrol pH'],
  ['Operator view for pH process value, setpoint, circulation, and dosing status.', 'Tampilan operator untuk nilai proses pH, setpoint, sirkulasi, dan status dosing.'],
  ['Electrical system', 'Sistem elektrikal'],
  ['Electrical Wiring & Control', 'Wiring & Kontrol Elektrikal'],
  ['The control panel combines the three-phase circulation-motor circuit with relay-controlled auxiliary functions. The wiring arrangement was simplified from available project documentation and installed hardware.', 'Panel kontrol menggabungkan rangkaian motor sirkulasi tiga fasa dengan fungsi bantu yang dikendalikan relay. Susunan wiring disederhanakan dari dokumentasi proyek dan hardware terpasang yang tersedia.'],
  ['380 V three-phase circulation-motor branch', 'Cabang motor sirkulasi tiga fasa 380 V'],
  ['3-pole MCB, LC1D18M7 contactor, and thermal overload relay', 'MCB 3-pole, kontaktor LC1D18M7, dan thermal overload relay'],
  ['Plug-in control relays, auxiliary wiring, and a single-pole MCB', 'Relay kontrol plug-in, wiring bantu, dan MCB single-pole'],
  ['Project records specify 6 A for the single-phase breaker; the installed panel appears to show C16.', 'Dokumen proyek mencantumkan 6 A untuk breaker satu fasa; panel terpasang tampak menunjukkan C16.'],
  ['Testing & Results', 'Pengujian & Hasil'],
  ['Reported pH dosing response.', 'Respons dosing pH yang dilaporkan.'],
  ['Reducing the dosing-pump setting substantially increased the time required for pH adjustment.', 'Penurunan pengaturan pompa dosing secara signifikan memperpanjang waktu penyesuaian pH.'],
  ['pH increased from approximately 8.00 to 10.00 in', 'pH meningkat dari sekitar 8,00 menjadi 10,00 dalam'],
  ['Lower dosing output required', 'Pengaturan dosing yang lebih rendah memerlukan'],
  ['to reach the reported result.', 'untuk mencapai hasil yang dilaporkan.'],
  ['Documentation', 'Dokumentasi'],
  ['Photographs and original software views from the project.', 'Foto dan tampilan software asli dari proyek.'],
  ['Control panel', 'Panel Kontrol'],
  ['Installed panel during project implementation.', 'Panel yang terpasang selama implementasi proyek.'],
  ['Wiring installation', 'Instalasi Wiring'],
  ['Panel wiring during implementation.', 'Wiring panel selama implementasi.'],
  ['PLC programming', 'Pemrograman PLC'],
  ['AtLogic program observed during commissioning and testing.', 'Program AtLogic saat implementasi dan pengujian.'],
  ['Circulatory pump', 'Pompa Sirkulasi'],
  ['Installed circulation pump.', 'Pompa sirkulasi yang terpasang.'],
  ['Dosing pump', 'Pompa Dosing'],
  ['Installed chemical metering pump.', 'Pompa metering kimia yang terpasang.'],
  ['Float switches', 'Float Switch'],
  ['Low/high level sensing for the hardwired refill subsystem.', 'Sensor level rendah/tinggi untuk subsistem pengisian hardwired.'],
  ['Solenoid valve', 'Katup Solenoid'],
  ['Water inlet solenoid used by the refill circuit.', 'Solenoid inlet air yang digunakan oleh rangkaian pengisian.'],
  ['Soda-ash preparation', 'Persiapan Soda Ash'],
  ['Field preparation of the dosing solution.', 'Persiapan larutan dosing di lapangan.'],
  ['pH controller', 'Kontroler pH'],
  ['Installed process pH display.', 'Display pH proses yang terpasang.'],
  ['pH test', 'Pengujian pH'],
  ['Manual pH-check reference.', 'Referensi pemeriksaan pH manual.'],
  ['Previous: Smart Workshop', 'Sebelumnya: Smart Workshop'],
  ['Next: Robotic Arm Platform', 'Berikutnya: Platform Lengan Robot']
];

const thesisTextPairs = [
  ['Micro-Milling Research · Bachelor Thesis', 'Riset Micro-Milling · Tugas Akhir'],
  ['Experimental study of dimensional accuracy, burr formation, cutting temperature, and chip characteristics in CP Titanium I-Plate micro-milling.', 'Studi eksperimental mengenai akurasi dimensi, pembentukan burr, temperatur pemotongan, dan karakteristik geram pada micro-milling I-Plate berbahan CP Titanium.'],
  ['Research overview', 'Ikhtisar riset'],
  ['Experimental study', 'Studi eksperimental'],
  ['I-Plate Geometry Design', 'Desain Geometri I-Plate'],
  ['Nominal geometry, manufacturing dimensions, and tool-access constraints defined.', 'Geometri nominal, dimensi manufaktur, dan batasan akses pahat ditetapkan.'],
  ['Micro-Milling Experiment', 'Eksperimen Micro-Milling'],
  ['CP Titanium specimens machined across controlled feed-rate conditions.', 'Spesimen CP Titanium dimesin pada kondisi feed rate yang terkontrol.'],
  ['Dimensional, Burr & Thermal Analysis', 'Analisis Dimensi, Burr & Termal'],
  ['Geometric accuracy, burr formation, and cutting temperature evaluated.', 'Akurasi geometri, pembentukan burr, dan temperatur pemotongan dievaluasi.'],
  ['Engineering Questions', 'Pertanyaan Teknik'],
  ['Why does feed rate matter at the microscale?', 'Mengapa feed rate penting pada skala mikro?'],
  ['Background', 'Latar Belakang'],
  ['CP Titanium combines high ductility with low thermal conductivity. At micro-scale cutting conditions, these characteristics make dimensional control and burr formation particularly sensitive to the relationship between feed per tooth and the cutting-edge scale.', 'CP Titanium memiliki keuletan tinggi dan konduktivitas termal rendah. Pada kondisi pemotongan skala mikro, karakteristik ini membuat kontrol dimensi dan pembentukan burr sangat sensitif terhadap hubungan antara feed per tooth dan skala mata potong.'],
  ['Aim', 'Tujuan'],
  ['The study varied feed rate from 10 to 100 mm/min while holding spindle speed, depth of cut, tool geometry, and dry-cutting conditions constant. The objective was to observe how increasing feed changed dimensional accuracy, burr height, contact temperature, and chip formation.', 'Penelitian memvariasikan feed rate dari 10 hingga 100 mm/min dengan mempertahankan spindle speed, depth of cut, geometri pahat, dan kondisi dry cutting tetap konstan. Tujuannya adalah mengamati pengaruh peningkatan feed terhadap akurasi dimensi, tinggi burr, temperatur kontak, dan pembentukan geram.'],
  ['Result', 'Hasil'],
  ['Higher feed rates produced progressively better dimensional accuracy and lower burr height within the investigated range. The strongest tested condition was 100 mm/min, reaching 99.4% mean dimensional accuracy and 38.2 µm mean burr height, while the maximum measured contact temperature occurred at 90 mm/min.', 'Feed rate yang lebih tinggi menghasilkan peningkatan akurasi dimensi dan penurunan tinggi burr secara bertahap dalam rentang penelitian. Kondisi pengujian terbaik adalah 100 mm/min dengan akurasi dimensi rata-rata 99,4% dan tinggi burr rata-rata 38,2 µm, sedangkan temperatur kontak maksimum terukur terjadi pada 90 mm/min.'],
  ['Micro-milling experiment with in-process thermal monitoring.', 'Eksperimen micro-milling dengan monitoring termal selama proses.']
];

const focusItems = {
  en: ['Industrial automation & PLC', 'Instrumentation & IIoT data systems', 'Mechanical design & manufacturing', 'Robotics & mechatronics'],
  id: ['Otomasi industri & PLC', 'Instrumentasi & sistem data IIoT', 'Desain mekanik & manufaktur', 'Robotika & mekatronika']
};

const titles = {
  en: {
    '/index.html': 'Amirul Hakim — Engineering Portfolio',
    '/': 'Amirul Hakim — Engineering Portfolio',
    '/centralized-data-acquisition-monitoring-system.html': 'Centralized Data Acquisition and Monitoring System | Amirul Hakim',
    '/plc-process-automation.html': 'Water Treatment Plant PLC & HMI Automation | Amirul Hakim'
  },
  id: {
    '/index.html': 'Amirul Hakim — Portofolio Engineering',
    '/': 'Amirul Hakim — Portofolio Engineering',
    '/centralized-data-acquisition-monitoring-system.html': 'Sistem Akuisisi dan Pemantauan Data Terpusat | Amirul Hakim',
    '/plc-process-automation.html': 'Otomasi PLC & HMI Water Treatment Plant | Amirul Hakim'
  }
};

const timahProjectTranslations = {
  en: {
    'nav.back': '← Back to projects', 'hero.context': 'PT Timah Industri · Maintenance Department · Internship Project',
    'hero.title1': 'Centralized Data Acquisition', 'hero.title2': 'and Monitoring System',
    'hero.abstract': 'Centralized acquisition and browser-based monitoring of distributed industrial flowmeter measurements for real-time visibility and historical review.',
    'overview.label': 'System overview', 'overview.context': 'Internship project', 'overview.field': 'Field Instruments',
    'overview.fieldDesc': 'Local industrial sensors and process measurements.', 'overview.database': 'Centralized Database',
    'overview.databaseDesc': 'Consolidated storage of timestamped monitoring data.', 'overview.dashboard': 'Monitoring Dashboard',
    'overview.dashboardDesc': 'Browser-based realtime and historical visualization.', 'project.label': 'Project Overview',
    'project.heading': 'From distributed readings to shared visibility.', 'project.background': 'Background',
    'project.backgroundDesc': 'Flowmeter readings were available locally from instruments installed at several monitored points.',
    'project.problem': 'Problem', 'project.problemDesc': 'Checking distributed measurements individually limited convenient centralized monitoring and historical review.',
    'project.result': 'Result', 'project.resultDesc': 'The project integrated these measurements into a centralized system for acquisition, storage, and browser-based realtime and historical monitoring.',
    'project.hardwareCaption': 'Installed flowmeter displays at the monitored locations.',
    'architecture.label': 'System architecture', 'architecture.heading': 'Field acquisition to web monitoring.',
    'architecture.sensors': 'Sensors', 'architecture.sensorsDesc': 'Process measurements from field instrumentation.',
    'architecture.modbusDesc': 'Industrial serial communication.', 'architecture.esp32Desc': 'Reads, structures, and forwards measurements.',
    'architecture.mqttDesc': 'Publish/subscribe telemetry transport.', 'architecture.network': 'Network / Internet',
    'architecture.networkDesc': 'Carries monitoring data between systems.', 'architecture.websocketDesc': 'Realtime browser-data delivery.',
    'architecture.mysqlDesc': 'Timestamped historical measurement storage.', 'architecture.dashboard': 'Web Monitoring Dashboard',
    'architecture.dashboardDesc': 'Realtime and historical monitoring interface.', 'measure.label': 'Measurements & Engineering Relationships',
    'measure.heading': 'Monitored values and physical relationships.', 'measure.realtime': 'Real-Time Process Variables', 'measure.accumulated': 'Accumulated Values',
    'param.flowRate': 'Flow Rate', 'param.flowRateDesc': 'Volumetric water flow through the monitored line.',
    'param.flowVelocity': 'Flow Velocity', 'param.flowVelocityDesc': 'Average water velocity through the pipe.',
    'param.flowPercentage': 'Flow Percentage', 'param.flowPercentageDesc': 'Current flow relative to rated capacity.',
    'param.instantHeat': 'Instantaneous Heat', 'param.instantHeatDesc': 'Thermal-energy transfer rate based on flow and temperature difference.',
    'param.inputTemperature': 'Input Temperature', 'param.inputTemperatureDesc': 'Water temperature entering the monitored circuit.',
    'param.outputTemperature': 'Output Temperature', 'param.outputTemperatureDesc': 'Water temperature leaving the monitored circuit.',
    'param.positiveFlow': 'Positive Flow', 'param.positiveFlowDesc': 'Cumulative forward flow volume.',
    'param.negativeFlow': 'Negative Flow', 'param.negativeFlowDesc': 'Cumulative reverse flow volume.',
    'param.heatingEnergy': 'Heating Energy', 'param.heatingEnergyDesc': 'Cumulative heating energy.',
    'param.coolingEnergy': 'Cooling Energy', 'param.coolingEnergyDesc': 'Cumulative cooling energy.',
    'formula.flow': 'Flow Relationship', 'formula.flowDesc': 'Flow velocity is related to volumetric flow and pipe cross-sectional area.',
    'formula.thermal': 'Thermal Relationship', 'formula.thermalDesc': 'Thermal-energy transfer rate depends on water flow and the inlet–outlet temperature difference.',
    'formula.validation': 'Measurement Validation',
    'formula.validationDesc': 'At approximately 27 m³/h and ΔT ≈ 3.6°C, the calculated value is approximately 0.407 GJ/h, closely matching the observed flowmeter reading of 0.404 GJ/h.',
    'docs.label': 'Technical documentation', 'docs.heading': 'System evidence.', 'docs.realtimeTitle': 'Original realtime monitoring dashboard',
    'docs.realtimeCaption': 'Internship-era overview and monitoring interface.', 'docs.historyTitle': 'Original historical monitoring dashboard',
    'docs.historyCaption': 'Internship-era record and reporting view.', 'docs.hardwareTitle': 'Physical flowmeter instrumentation',
    'docs.hardwareCaption': 'Installed displays at the monitored utility locations.', 'docs.videoUnsupported': 'Your browser does not support embedded video.',
    'docs.esp32Title': 'ESP32 acquisition demonstration', 'docs.esp32Caption': 'Hardware-side synthetic telemetry demonstration.',
    'demo.label': 'Portfolio reconstruction', 'demo.heading': 'Interactive Dashboard Simulation',
    'demo.description': 'A public portfolio reconstruction using physically consistent synthetic telemetry generated by an ESP32. It is not connected to PT Timah Industri infrastructure.',
    'demo.cta': 'Launch Live Demo', 'demo.previewLabel': 'Live dashboard preview', 'demo.previewTitle': 'Preview unavailable',
    'demo.previewText': 'The video could not be loaded.', 'nav.allProjects': 'All projects',
    'nav.nextProject': 'Next: Feed-Rate Optimization in CP Titanium Micro-Milling', 'footer.portfolio': 'Engineering Portfolio'
  },
  id: {
    'nav.back': '← Kembali ke proyek', 'hero.context': 'PT Timah Industri · Departemen Maintenance · Proyek Magang',
    'hero.title1': 'Sistem Akuisisi dan', 'hero.title2': 'Pemantauan Data Terpusat',
    'hero.abstract': 'Akuisisi terpusat dan pemantauan berbasis peramban untuk pengukuran flowmeter industri yang tersebar, mendukung visibilitas waktu nyata dan peninjauan historis.',
    'overview.label': 'Ikhtisar Sistem', 'overview.context': 'Proyek magang', 'overview.field': 'Instrumen Lapangan',
    'overview.fieldDesc': 'Sensor industri lokal dan pengukuran proses.', 'overview.database': 'Basis Data Terpusat',
    'overview.databaseDesc': 'Penyimpanan terintegrasi untuk data pemantauan bertanda waktu.', 'overview.dashboard': 'Dasbor Pemantauan',
    'overview.dashboardDesc': 'Visualisasi waktu nyata dan historis berbasis peramban.', 'project.label': 'Ikhtisar Proyek',
    'project.heading': 'Dari pembacaan tersebar menuju visibilitas bersama.', 'project.background': 'Latar Belakang',
    'project.backgroundDesc': 'Pembacaan flowmeter tersedia secara lokal pada instrumen yang terpasang di beberapa titik pemantauan.',
    'project.problem': 'Permasalahan', 'project.problemDesc': 'Pemeriksaan pengukuran yang tersebar secara terpisah membatasi kemudahan pemantauan terpusat dan peninjauan historis.',
    'project.result': 'Hasil', 'project.resultDesc': 'Proyek ini mengintegrasikan pengukuran ke dalam sistem terpusat untuk akuisisi, penyimpanan, serta pemantauan waktu nyata dan historis berbasis peramban.',
    'project.hardwareCaption': 'Tampilan flowmeter yang terpasang di lokasi pemantauan.',
    'architecture.label': 'Arsitektur Sistem', 'architecture.heading': 'Dari akuisisi lapangan ke pemantauan web.',
    'architecture.sensors': 'Sensor', 'architecture.sensorsDesc': 'Pengukuran proses dari instrumentasi lapangan.',
    'architecture.modbusDesc': 'Komunikasi serial industri.', 'architecture.esp32Desc': 'Membaca, menyusun, dan meneruskan pengukuran.',
    'architecture.mqttDesc': 'Transport telemetri berbasis publish/subscribe.', 'architecture.network': 'Jaringan / Internet',
    'architecture.networkDesc': 'Membawa data pemantauan antarsistem.', 'architecture.websocketDesc': 'Pengiriman data waktu nyata ke peramban.',
    'architecture.mysqlDesc': 'Penyimpanan historis pengukuran bertanda waktu.', 'architecture.dashboard': 'Dasbor Pemantauan Web',
    'architecture.dashboardDesc': 'Antarmuka pemantauan waktu nyata dan historis.', 'measure.label': 'Pengukuran & Hubungan Rekayasa',
    'measure.heading': 'Nilai Pemantauan dan Hubungan Fisik', 'measure.realtime': 'Variabel Proses Waktu Nyata', 'measure.accumulated': 'Nilai Akumulasi',
    'param.flowRate': 'Laju Aliran', 'param.flowRateDesc': 'Laju aliran volumetrik air pada jalur yang dipantau.',
    'param.flowVelocity': 'Kecepatan Aliran', 'param.flowVelocityDesc': 'Kecepatan rata-rata air di dalam pipa.',
    'param.flowPercentage': 'Persentase Aliran', 'param.flowPercentageDesc': 'Aliran saat ini relatif terhadap kapasitas terukur.',
    'param.instantHeat': 'Laju Perpindahan Panas', 'param.instantHeatDesc': 'Laju perpindahan energi termal berdasarkan aliran dan perbedaan temperatur.',
    'param.inputTemperature': 'Temperatur Masuk', 'param.inputTemperatureDesc': 'Temperatur air yang memasuki sirkuit pemantauan.',
    'param.outputTemperature': 'Temperatur Keluar', 'param.outputTemperatureDesc': 'Temperatur air yang meninggalkan sirkuit pemantauan.',
    'param.positiveFlow': 'Akumulasi Aliran Positif', 'param.positiveFlowDesc': 'Volume kumulatif aliran maju.',
    'param.negativeFlow': 'Akumulasi Aliran Negatif', 'param.negativeFlowDesc': 'Volume kumulatif aliran balik.',
    'param.heatingEnergy': 'Energi Pemanasan', 'param.heatingEnergyDesc': 'Energi pemanasan kumulatif.',
    'param.coolingEnergy': 'Energi Pendinginan', 'param.coolingEnergyDesc': 'Energi pendinginan kumulatif.',
    'formula.flow': 'Hubungan Aliran', 'formula.flowDesc': 'Kecepatan aliran berhubungan dengan laju aliran volumetrik dan luas penampang pipa.',
    'formula.thermal': 'Hubungan Termal', 'formula.thermalDesc': 'Laju perpindahan energi termal bergantung pada aliran air dan perbedaan temperatur masuk–keluar.',
    'formula.validation': 'Validasi Pengukuran',
    'formula.validationDesc': 'Pada sekitar 27 m³/h dan ΔT ≈ 3.6°C, nilai perhitungan sekitar 0.407 GJ/h, mendekati pembacaan flowmeter yang teramati sebesar 0.404 GJ/h.',
    'docs.label': 'Dokumentasi Teknis', 'docs.heading': 'Bukti sistem.', 'docs.realtimeTitle': 'Dasbor pemantauan waktu nyata asli',
    'docs.realtimeCaption': 'Ikhtisar dan antarmuka pemantauan pada masa magang.', 'docs.historyTitle': 'Dasbor pemantauan historis asli',
    'docs.historyCaption': 'Tampilan rekaman dan pelaporan pada masa magang.', 'docs.hardwareTitle': 'Instrumentasi flowmeter fisik',
    'docs.hardwareCaption': 'Tampilan terpasang di lokasi utilitas yang dipantau.', 'docs.videoUnsupported': 'Peramban Anda tidak mendukung video tersemat.',
    'docs.esp32Title': 'Demonstrasi akuisisi ESP32', 'docs.esp32Caption': 'Demonstrasi telemetri sintetis pada sisi perangkat keras.',
    'demo.label': 'Rekonstruksi portofolio', 'demo.heading': 'Simulasi Dasbor Interaktif',
    'demo.description': 'Rekonstruksi portofolio publik menggunakan telemetri sintetis yang konsisten secara fisik dan dihasilkan oleh ESP32. Demo ini tidak terhubung ke infrastruktur PT Timah Industri.',
    'demo.cta': 'Buka Demo Langsung', 'demo.previewLabel': 'Pratinjau dasbor langsung', 'demo.previewTitle': 'Pratinjau tidak tersedia',
    'demo.previewText': 'Video tidak dapat dimuat.', 'nav.allProjects': 'Semua proyek',
    'nav.nextProject': 'Berikutnya: Optimasi Feed Rate pada Micro-Milling CP Titanium', 'footer.portfolio': 'Portofolio Engineering'
  }
};

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function createLanguageSwitch() {
  const navWrap = document.querySelector('.nav-wrap');
  if (!navWrap || document.querySelector('.lang-switch')) return;

  const switcher = document.createElement('div');
  switcher.className = 'lang-switch';
  switcher.setAttribute('aria-label', 'Language switcher');
  switcher.innerHTML = `
    <button class="lang-option" type="button" data-lang="en" aria-label="Switch to English">ENG</button>
    <span aria-hidden="true">|</span>
    <button class="lang-option" type="button" data-lang="id" aria-label="Switch to Indonesian">ID</button>
  `;
  navWrap.appendChild(switcher);
}

function translateTextNodes(lang) {
  const from = lang === 'id' ? 0 : 1;
  const to = lang === 'id' ? 1 : 0;
  const activePairs = document.body.classList.contains('wtp-page')
    ? [...textPairs, ...wtpTextPairs]
    : document.body.classList.contains('thesis-page')
      ? [...textPairs, ...thesisTextPairs]
      : textPairs;
  const map = new Map(activePairs.map(pair => [normalizeText(pair[from]), pair[to]]));
  const stableMap = new Map(activePairs.map(pair => [normalizeText(pair[0]), pair[lang === 'id' ? 1 : 0]]));
  const selector = 'a, button, h1, h2, h3, p, span, strong, figcaption, small, dt, dd, li';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = timahProjectTranslations[lang]?.[element.dataset.i18n]
      || stableMap.get(normalizeText(element.dataset.i18n));
    if (value) element.textContent = value;
  });

  document.querySelectorAll(selector).forEach(element => {
    if (element.closest('.lang-switch')) return;
    if (element.hasAttribute('data-i18n')) return;
    if (element.children.length > 0) return;

    const key = normalizeText(element.textContent);
    if (map.has(key)) {
      element.textContent = map.get(key);
    }
  });
}

function translateFocusList(lang) {
  document.querySelectorAll('.focus-list li').forEach((item, index) => {
    const number = item.querySelector('span')?.textContent || String(index + 1).padStart(2, '0');
    const text = focusItems[lang]?.[index] || focusItems.en[index];
    item.innerHTML = `<span>${number}</span> ${text}`;
  });
}

function setLanguage(lang) {
  const selected = lang === 'id' ? 'id' : 'en';
  document.documentElement.lang = selected === 'id' ? 'id' : 'en';
  translateTextNodes(selected);
  translateFocusList(selected);
  document.querySelectorAll('.lang-option').forEach(button => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const path = window.location.pathname.endsWith('/') ? '/' : window.location.pathname.slice(window.location.pathname.lastIndexOf('/'));
  if (titles[selected]?.[path]) {
    document.title = titles[selected][path];
  } else {
    const from = selected === 'id' ? 0 : 1;
    const to = selected === 'id' ? 1 : 0;
    textPairs.forEach(pair => {
      document.title = document.title.replace(pair[from], pair[to]);
    });
  }

  localStorage.setItem('portfolio-language', selected);
}

createLanguageSwitch();
setLanguage(localStorage.getItem('portfolio-language') || 'en');

document.querySelectorAll('.lang-option').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

function initializeImageLightbox() {
  const lightbox = document.querySelector('.image-lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeButton = lightbox?.querySelector('.image-lightbox-close');
  if (!lightbox || !lightboxImage || !document.body.classList.contains('wtp-page')) return;

  const open = (source, alt = '') => {
    lightboxImage.src = new URL(source, document.baseURI).href;
    lightboxImage.alt = alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeButton?.focus();
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImage.removeAttribute('src');
  };

  document.querySelectorAll('.wtp-page main img').forEach(image => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Enlarge image: ${image.alt}`);
    image.addEventListener('click', () => open(image.currentSrc || image.src, image.alt));
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(image.currentSrc || image.src, image.alt);
      }
    });
  });

  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', () => open(trigger.dataset.lightboxSrc, 'Field installation work at the Water Treatment Plant'));
  });
  closeButton?.addEventListener('click', close);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

initializeImageLightbox();

document.querySelector('#year').textContent = new Date().getFullYear();
