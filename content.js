window.BASMALA_CONTENT = {
  label: "محتوى منصة بسملة",
  courses: [
    {
      id: "programming-basics",
      title: "مبادئ البرمجة",
      description: "مراجعة المفاهيم الأساسية في البرمجة: المتغيرات والشروط والحلقات.",
      category: "الحاسوب",
      quizzes: [
        {
          id: "prog-quiz-1", title: "المتغيرات والأنواع", description: "تدريب على المفاهيم الأولى.", mode: "practice", timeLimit: null,
          questions: [
            { id: "prog-q1", text: "ما المقصود بالمتغير في البرمجة؟", options: ["مكان لتخزين قيمة", "نوع من الطابعات", "نظام تشغيل", "لغة برمجة"], correctAnswer: 0, explanation: "المتغير اسم يشير إلى موضع في الذاكرة تُخزَّن فيه قيمة يمكن استعمالها أثناء تنفيذ البرنامج." },
            { id: "prog-q2", text: "يمكن أن تتغير قيمة المتغير أثناء تنفيذ البرنامج.", options: ["صحيح", "خطأ"], correctAnswer: 0, explanation: "سُمّي المتغير بهذا الاسم لأن قيمته قابلة للتغيير، بخلاف الثابت." },
            { id: "prog-q3", text: "أي القيم الآتية تمثل نصًّا؟", options: ["42", "3.14", "\"مرحبا\"", "true"], correctAnswer: 2, explanation: "النص يُكتب عادةً بين علامتي تنصيص." }
          ]
        },
        {
          id: "prog-quiz-2", title: "الشروط والحلقات", description: "اختبار قصير للمفاهيم الأساسية.", mode: "exam", timeLimit: null,
          questions: [
            { id: "prog-q4", text: "ما وظيفة الحلقة التكرارية؟", options: ["تكرار تنفيذ مجموعة تعليمات", "حذف ملف", "طباعة صفحة", "إغلاق البرنامج"], correctAnswer: 0, explanation: "تتيح الحلقة تكرار الكتلة نفسها من التعليمات ما دام الشرط متحققًا." },
            { id: "prog-q5", text: "تُنفَّذ تعليمات كتلة if فقط عندما يكون شرطها صحيحًا.", options: ["صحيح", "خطأ"], correctAnswer: 0, explanation: "إذا لم يتحقق الشرط تُتجاوز الكتلة." }
          ]
        }
      ]
    },
    {
      id: "arabic-grammar", title: "النحو العربي", description: "مراجعة مختصرة في أبواب الإعراب الأساسية.", category: "اللغة",
      quizzes: [{ id: "grammar-quiz-1", title: "الجملة الاسمية", description: "المبتدأ والخبر.", mode: "practice", timeLimit: null, questions: [
        { id: "grammar-q1", text: "ما حكم المبتدأ من حيث الإعراب؟", options: ["مرفوع", "منصوب", "مجرور", "مجزوم"], correctAnswer: 0, explanation: "المبتدأ والخبر مرفوعان في الأصل." },
        { id: "grammar-q2", text: "الفاعل في الجملة الفعلية مرفوع.", options: ["صحيح", "خطأ"], correctAnswer: 0, explanation: "الفاعل مرفوع دائمًا، وعلامة رفعه الأصلية الضمة." }
      ] }]
    },
    {
      id: "general-geography", title: "الجغرافيا العامة", description: "أسئلة في الجغرافيا لاختبار معلوماتك.", category: "العلوم الاجتماعية",
      quizzes: [{ id: "geo-quiz-1", title: "القارات والمحيطات", description: "اختبار قصير.", mode: "exam", timeLimit: null, questions: [
        { id: "geo-q1", text: "كم عدد القارات المتعارف عليها في أغلب المناهج؟", options: ["خمس", "ست", "سبع", "ثمان"], correctAnswer: 2, explanation: "يعتمد كثير من المناهج سبع قارات، وتختلف بعض المناهج في العدّ." },
        { id: "geo-q2", text: "ما أكبر المحيطات مساحةً؟", options: ["الأطلسي", "الهندي", "المتجمد الشمالي", "الهادئ"], correctAnswer: 3, explanation: "المحيط الهادئ أكبر المحيطات وأعمقها." }
      ] }]
    }
  ]
};
