-- Categories
INSERT INTO categories (name, description) VALUES
('SaaS', '소프트웨어 as a 서비스 제품'),
('AI/ML', '인공지능과 머신러닝 제품'),
('Developer Tools', '개발자 도구와 유틸리티'),
('Marketing', '마케팅과 광고 도구'),
('Productivity', '생산성 향상 도구');

-- Products
INSERT INTO products (name, tagline, description, how_it_works, icon, url, profile_id, category_id) VALUES
('CodeBuddy', '당신의 AI 코딩 파트너', '실시간 코드 리뷰와 제안을 제공하는 AI 도구', 'GPT-4를 활용한 코드 분석', '/icons/codebuddy.png', 'https://codebuddy.dev', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 1),
('MarketMaster', '데이터 기반 마케팅 자동화', '마케팅 캠페인 자동화 플랫폼', 'AI 기반 마케팅 최적화', '/icons/marketmaster.png', 'https://marketmaster.io', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 2),
('TaskFlow', '팀 생산성의 혁신', '직관적인 프로젝트 관리 도구', '드래그 앤 드롭 작업 관리', '/icons/taskflow.png', 'https://taskflow.app', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 3),
('DevOpsHub', '원스톱 개발 운영 플랫폼', '통합 DevOps 솔루션', '자동화된 배포 파이프라인', '/icons/devopshub.png', 'https://devopshub.io', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 4),
('DataViz', '데이터 시각화 도구', '복잡한 데이터를 쉽게 시각화', '실시간 데이터 처리', '/icons/dataviz.png', 'https://dataviz.tech', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 5);

-- Product Upvotes (Bridge Table)
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43');

-- Reviews
INSERT INTO reviews (product_id, profile_id, rating, review) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 5, '훌륭한 제품입니다!'),
(2, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 4, '사용하기 쉽고 효과적입니다'),
(3, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 5, '우리 팀의 생산성이 크게 향상되었습니다'),
(4, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 4, '강력한 기능들이 많습니다'),
(5, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 5, '데이터 시각화가 매우 직관적입니다');

-- Topics
INSERT INTO topics (name, slug) VALUES
('개발', 'development'),
('디자인', 'design'),
('마케팅', 'marketing'),
('스타트업', 'startup'),
('AI', 'artificial-intelligence');

-- Posts
INSERT INTO posts (title, content, topic_id, profile_id) VALUES
('React 18의 새로운 기능', 'React 18에서 추가된 주요 기능들을 소개합니다...', 1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43'),
('효과적인 UI 디자인 원칙', 'UI 디자인의 기본 원칙과 최신 트렌드...', 2, '6f9f6dbe-ee7a-40d8-884b-35793c270a43'),
('B2B 마케팅 전략', 'B2B 기업을 위한 효과적인 마케팅 전략...', 3, '6f9f6dbe-ee7a-40d8-884b-35793c270a43'),
('스타트업 성장 이야기', '0에서 1000명의 사용자까지...', 4, '6f9f6dbe-ee7a-40d8-884b-35793c270a43'),
('AI와 미래 기술', 'AI가 가져올 미래 변화에 대해...', 5, '6f9f6dbe-ee7a-40d8-884b-35793c270a43');

-- Post Upvotes (Bridge Table)
INSERT INTO post_upvotes (post_id, profile_id) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43');

-- Post Replies
INSERT INTO post_replies (post_id, profile_id, reply) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '매우 유익한 글이네요!'),
(2, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '디자인 인사이트가 좋습니다'),
(3, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '실제 적용해볼 만한 전략이네요'),
(4, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '창업자로서 공감됩니다'),
(5, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'AI의 발전이 기대됩니다');

-- GPT Ideas
INSERT INTO gpt_ideas (idea, views) VALUES
('AI 기반 코드 리뷰 자동화 도구', 100),
('실시간 번역 화상회의 플랫폼', 150),
('AI 작문 도우미 서비스', 200),
('머신러닝 기반 주식 분석 도구', 180),
('자동 이미지 최적화 서비스', 120);

-- GPT Ideas Likes (Bridge Table)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43');

-- Jobs
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range) VALUES
('시니어 프론트엔드 개발자', '최신 웹 기술을 활용한 개발', '프론트엔드 아키텍처 설계 및 개발', '5년 이상의 React 경험', '유연근무, 원격근무', 'React, TypeScript, Next.js', '테크스타트', '/logos/techstart.png', '서울', 'https://techstart.kr/jobs', 'full-time', 'remote', '$100,000 - $120,000'),
('UX/UI 디자이너', '사용자 중심 디자인', '사용자 경험 설계 및 디자인', '3년 이상의 디자인 경험', '점심 제공, 교육 지원', 'Figma, Adobe XD', '디자인허브', '/logos/designhub.png', '부산', 'https://designhub.kr/jobs', 'full-time', 'hybrid', '$70,000 - $100,000'),
('DevOps 엔지니어', '클라우드 인프라 관리', '배포 자동화 및 모니터링', 'AWS 자격증 보유', '주식 옵션, 성과급', 'AWS, Kubernetes, Docker', '클라우드테크', '/logos/cloudtech.png', '대전', 'https://cloudtech.kr/jobs', 'full-time', 'in-person', '$100,000 - $120,000'),
('마케팅 매니저', '디지털 마케팅 전략 수립', '캠페인 기획 및 실행', '5년 이상의 마케팅 경험', '자유로운 휴가, 복지 패키지', 'Google Analytics, Facebook Ads', '마케팅프로', '/logos/marketingpro.png', '인천', 'https://marketingpro.kr/jobs', 'full-time', 'hybrid', '$70,000 - $100,000'),
('백엔드 개발자', '확장 가능한 서버 개발', 'API 설계 및 구현', 'Node.js 전문가', '4대 보험, 인센티브', 'Node.js, PostgreSQL', '서버테크', '/logos/servertech.png', '광주', 'https://servertech.kr/jobs', 'full-time', 'remote', '$100,000 - $120,000');

-- Team
INSERT INTO team (product_name, team_size, equity_split, product_stage, roles, product_description) VALUES
('AI 코딩 어시스턴트', 3, 30, 'mvp', '풀스택 개발자, AI 전문가', 'AI 기반 코딩 도우미 서비스'),
('디자인 협업 도구', 4, 25, 'prototype', 'UI/UX 디자이너, 프론트엔드 개발자', '실시간 디자인 협업 플랫폼'),
('마케팅 자동화 도구', 5, 20, 'product', '마케팅 전문가, 백엔드 개발자', '통합 마케팅 자동화 솔루션'),
('데이터 분석 플랫폼', 3, 33, 'mvp', '데이터 사이언티스트, 풀스택 개발자', '비즈니스 인텔리전스 도구'),
('프로젝트 관리 앱', 4, 25, 'idea', '프로덕트 매니저, 개발자', '애자일 프로젝트 관리 도구');

-- Message Rooms
INSERT INTO message_rooms DEFAULT VALUES;

-- Message Room Members (Bridge Table)
INSERT INTO message_room_members (message_room_id, profile_id) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43');

-- Messages
INSERT INTO messages (message_room_id, sender_id, content) VALUES
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '안녕하세요! 프로젝트 협업 제안드립니다.'),
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '제품에 대해 더 자세히 이야기 나누고 싶습니다.'),
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '포트폴리오 공유 부탁드립니다.'),
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '미팅 가능한 시간을 알려주세요.'),
(1, '6f9f6dbe-ee7a-40d8-884b-35793c270a43', '제안서 검토 후 연락드리겠습니다.');

-- Notifications
INSERT INTO notifications (source_id, target_id, type) VALUES
('6f9f6dbe-ee7a-40d8-884b-35793c270a43', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'follow'),
('6f9f6dbe-ee7a-40d8-884b-35793c270a43', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'review'),
('6f9f6dbe-ee7a-40d8-884b-35793c270a43', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'reply'),
('6f9f6dbe-ee7a-40d8-884b-35793c270a43', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'mention'),
('6f9f6dbe-ee7a-40d8-884b-35793c270a43', '6f9f6dbe-ee7a-40d8-884b-35793c270a43', 'follow'); 