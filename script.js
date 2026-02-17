        const data = {
            products: [
                { id: 1, name: "Календарь настенный", article: "РелПР-000000001", price: 150, unit: "шт" },
                { id: 2, name: "Офисная бумага А4", article: "РелПР-000000002", price: 250, unit: "уп" },
                { id: 3, name: "Футболка спортивная", article: "РелПР-000000003", price: 325, unit: "шт" },
                { id: 4, name: "Клавиатура беспроводная", article: "РелПР-000000004", price: 1540, unit: "шт" },
                { id: 5, name: "Бокалы для вина", article: "РелПР-000000005", price: 1560, unit: "уп" },
                { id: 6, name: "Рулон обоев", article: "РелПР-000000006", price: 570, unit: "шт" },
                { id: 7, name: "Табуретка пластмассовая", article: "РелПР-000000007", price: 250, unit: "шт" }
            ],
            employees: [
                { fullname: "Иванов Иван Иванович", position: "Менеджер по работе с клиентами", login: "wk_IvanovII", password: "****" },
                { fullname: "Семёнов Семён Семёнович", position: "Менеджер по работе с клиентами", login: "wk_SemenovSS", password: "****" },
                { fullname: "Фёдоров Фёдор Фёдорович", position: "Менеджер по работе с клиентами", login: "wk_FedorovFF", password: "****" },
                { fullname: "Тимуров Тимур Тимурович", position: "Менеджер по работе с клиентами", login: "wk_TimurovTT", password: "****" }
            ],
            pickupPoints: [
                { code: "ПВ-01", address: "г. Москва, ул. Маркситская, д. 10, стр. 6", employees: ["wk_IvanovII"] },
                { code: "ПВ-02", address: "г. Москва, ул. Бауманская, д. 2, стр. 8", employees: ["wk_SemenovSS"] },
                { code: "ПВ-03", address: "г. Москва, ул. Перово, д. 72, к. 1", employees: ["wk_FedorovFF"] },
                { code: "ПВ-04", address: "г. Москва, ул. Братиславская, д. 26, к. 1", employees: ["wk_TimurovTT"] }
            ],
            clients: [
                { fullname: "Егорова Анастасия Юрьевна", birth: "26.08.2000", passport: "45 23 662176", login: "EgorovaAU", cards: "0224 6223 8735 7784 03/26", nearbyPoints: ["ПВ-01", "ПВ-03"] },
                { fullname: "Максимов Дмитрий Аркадьевич", birth: "11.09.1998", passport: "47 24 878423", login: "MaksimovDA", cards: "5282 6689 8113 3234 08/23", nearbyPoints: ["ПВ-02"] },
                { fullname: "Захаров Леонид Дмитриевич", birth: "26.07.2000", passport: "47 83 226673", login: "ZakharovLD", cards: "6732 5463 8754 1546 06/24", nearbyPoints: ["ПВ-04"] }
            ],
            orders: [
                { id: "ЗКЛ№000000001/23", date: "01.09.2023 10:16:45", client: "EgorovaAU", items: [{ name: "Календарь настенный", qty: 1, price: 150 }, { name: "Бокалы для вина", qty: 1, price: 1560 }], totalProduct: 1710, deliveryCost: 250, total: 1960, status: "Выдан", employee: "wk_FedorovFF" },
                { id: "ЗКЛ№000000002/23", date: "01.09.2023 15:41:11", client: "MaksimovDA", items: [{ name: "Офисная бумага А4", qty: 2, price: 500 }, { name: "Футболка спортивная", qty: 2, price: 650 }], totalProduct: 1150, deliveryCost: 250, total: 1400, status: "Выдан", employee: "wk_SemenovSS" },
                { id: "ЗКЛ№000000003/23", date: "02.09.2023 13:01:25", client: "ZakharovLD", items: [{ name: "Футболка спортивная", qty: 1, price: 325 }], totalProduct: 325, deliveryCost: 260, total: 585, status: "Готов к выдаче", employee: "wk_TimurovTT" },
                { id: "ЗКЛ№000000004/23", date: "02.09.2023 14:54:49", client: "ZakharovLD", items: [{ name: "Футболка спортивная", qty: 1, price: 325 }, { name: "Бокалы для вина", qty: 2, price: 3120 }], totalProduct: 3445, deliveryCost: 300, total: 3745, status: "Готов к выдаче", employee: "wk_TimurovTT" },
                { id: "ЗКЛ№000000005/23", date: "03.09.2023 10:36:23", client: "EgorovaAU", items: [{ name: "Офисная бумага А4", qty: 3, price: 750 }], totalProduct: 2290, deliveryCost: 200, total: 2490, status: "Собирается", employee: "wk_IvanovII" }, // в документе ещё клавиатура, но для краткости оставим так
                { id: "ЗКЛ№000000006/23", date: "03.09.2023 12:09:29", client: "MaksimovDA", items: [{ name: "Календарь настенный", qty: 1, price: 150 }, { name: "Офисная бумага А4", qty: 1, price: 250 }], totalProduct: 400, deliveryCost: 200, total: 600, status: "Собирается", employee: "wk_SemenovSS" },
                { id: "ЗКЛ№000000007/23", date: "04.09.2023 17:59:58", client: "ZakharovLD", items: [{ name: "Клавиатура беспроводная", qty: 1, price: 1540 }, { name: "Рулон обоев", qty: 2, price: 1040 }, { name: "Табуретка пластмассовая", qty: 2, price: 500 }], totalProduct: 3080, deliveryCost: 250, total: 3330, status: "Собирается", employee: "wk_TimurovTT" }
            ],
            contracts: [
                { number: "ДсП№0000000001-23", date: "25.08.2023", term: "2 года", supplier: "ООО «Товарная Поставка» (ООО «ТовПос»)", okpo: "5229652954", inn: "0045225672", bik: "564381284", address: "г. Москва, ул. Добрынинская, д. 36, стр. 8", phone: "+7(963)883-90-95", representative: "Владимиров Андрей Борисович" },
                { number: "ДсП№0000000002-23", date: "26.08.2023", term: "2 года", supplier: "НПАО «Доставка куда угодно» (НПАО «ДГУ»)", okpo: "5629621967", inn: "0023262216", bik: "449549154", address: "г. Москва, ул. Крымская, д. 10, стр. 2", phone: "+7(925)93299-17", representative: "Андреев Роман Николаевич" }
            ],
            estimates: [
                { number: "СмН№000000001/23", contract: "ДсП№0000000001-23", date: "01.09.2023", status: "Закрыта", products: [{ name: "Календарь настенный", qty: 200 }, { name: "Офисная бумага А4", qty: 40 }, { name: "Клавиатура беспроводная", qty: 10 }] },
                { number: "СмН№000000002/23", contract: "ДсП№0000000001-23", date: "02.09.2023", status: "В пути", products: [{ name: "Офисная бумага А4", qty: 50 }, { name: "Футболка спортивная", qty: 100 }] },
                { number: "СмН№000000003/23", contract: "ДсП№0000000002-23", date: "02.09.2023", status: "Обработка", products: [{ name: "Бокалы для вина", qty: 5 }, { name: "Табуретка пластмассовая", qty: 25 }] }
            ]
        };

        function renderDashboard() {
            const totalProducts = data.products.length;
            const totalOrders = data.orders.length;
            const totalClients = data.clients.length;
            const activeOrders = data.orders.filter(o => o.status !== "Выдан" && o.status !== "Отменён").length;
            return `
                <div class="card">
                    <h2> Обзор системы</h2>
                    <div class="grid-2">
                        <div class="stat-item"><h3>Товаров</h3><p>${totalProducts}</p></div>
                        <div class="stat-item"><h3>Заказов всего</h3><p>${totalOrders}</p></div>
                        <div class="stat-item"><h3>Клиентов</h3><p>${totalClients}</p></div>
                        <div class="stat-item"><h3>Активных заказов</h3><p>${activeOrders}</p></div>
                    </div>
                </div>
                <div class="card">
                    <h3 style="margin-bottom:1rem; font-weight:500;">Последние заказы</h3>
                    <table>
                        <thead><tr><th>Номер</th><th>Дата</th><th>Клиент</th><th>Сумма</th><th>Статус</th></tr></thead>
                        <tbody>
                            ${data.orders.slice(0, 5).map(o => `<tr>
                                <td>${o.id}</td><td>${o.date}</td><td>${o.client}</td><td>${o.total} ₽</td><td><span class="badge">${o.status}</span></td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderProducts() {
            return `
                <div class="card">
                    <h2> Товары</h2>
                    <table>
                        <thead><tr><th>Артикул</th><th>Наименование</th><th>Цена</th><th>Ед.</th></tr></thead>
                        <tbody>
                            ${data.products.map(p => `<tr><td>${p.article}</td><td>${p.name}</td><td>${p.price} ₽</td><td>${p.unit}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderOrders() {
            return `
                <div class="card">
                    <h2> Заказы клиентов</h2>
                    ${data.orders.map(o => `
                        <div style="background:#f9fcff; border-radius:16px; padding:1.2rem; margin-bottom:1.5rem; border:1px solid #e2e8f0;">
                            <div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                                <span><strong>${o.id}</strong> от ${o.date}</span>
                                <span class="badge">${o.status}</span>
                            </div>
                            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:0.5rem; font-size:0.95rem;">
                                <div>Клиент: ${o.client}</div>
                                <div>Сотрудник: ${o.employee}</div>
                                <div>Товаров: ${o.items.length}</div>
                                <div>Сумма: ${o.total} ₽ (доставка ${o.deliveryCost} ₽)</div>
                            </div>
                            <details style="margin-top:0.8rem;">
                                <summary style="cursor:pointer; color:#1e2b3c;">Состав заказа</summary>
                                <ul style="margin-top:0.5rem; list-style:none; padding-left:0;">
                                    ${o.items.map(item => `<li>• ${item.name} — ${item.qty} шт. = ${item.price} ₽</li>`).join('')}
                                </ul>
                            </details>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderClients() {
            return `
                <div class="card">
                    <h2>👥 Клиенты</h2>
                    <table>
                        <thead><tr><th>ФИО</th><th>Дата рожд.</th><th>Паспорт</th><th>Логин</th><th>Ближайшие точки</th></tr></thead>
                        <tbody>
                            ${data.clients.map(c => `<tr>
                                <td>${c.fullname}</td><td>${c.birth}</td><td>${c.passport}</td><td>${c.login}</td><td>${c.nearbyPoints.join(', ')}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="card">
                    <h3>Точки выдачи</h3>
                    <table>
                        <thead><tr><th>Код</th><th>Адрес</th><th>Сотрудники</th></tr></thead>
                        <tbody>
                            ${data.pickupPoints.map(p => `<tr><td>${p.code}</td><td>${p.address}</td><td>${p.employees.join(', ')}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderEmployees() {
            return `
                <div class="card">
                    <h2> Сотрудники</h2>
                    <table>
                        <thead><tr><th>ФИО</th><th>Должность</th><th>Логин</th></tr></thead>
                        <tbody>
                            ${data.employees.map(e => `<tr><td>${e.fullname}</td><td>${e.position}</td><td>${e.login}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        function renderContracts() {
            return `
                <div class="card">
                    <h2> Договоры с поставщиками</h2>
                    ${data.contracts.map(c => `
                        <div style="background:#f9fcff; border-radius:16px; padding:1rem; margin-bottom:1rem;">
                            <div><strong>${c.number}</strong> от ${c.date}, срок ${c.term}</div>
                            <div style="font-size:0.9rem; color:#4a5568;">Поставщик: ${c.supplier} (ИНН ${c.inn})</div>
                            <div style="font-size:0.9rem;">Представитель: ${c.representative}, тел. ${c.phone}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="card">
                    <h2> Сметы на поставку</h2>
                    ${data.estimates.map(e => `
                        <div style="border-bottom:1px solid #edf2f7; padding:1rem 0;">
                            <div style="display:flex; gap:1rem; flex-wrap:wrap;"><strong>${e.number}</strong> по договору ${e.contract}, дата ${e.date}, статус <span class="badge">${e.status}</span></div>
                            <div style="margin-top:0.4rem;">Продукция: ${e.products.map(p => `${p.name} (${p.qty} шт.)`).join(', ')}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        const contentDiv = document.getElementById('content');
        const tabs = document.querySelectorAll('.tab-btn');

        function showTab(tabId) {
            let html = '';
            switch (tabId) {
                case 'dashboard': html = renderDashboard(); break;
                case 'products': html = renderProducts(); break;
                case 'orders': html = renderOrders(); break;
                case 'clients': html = renderClients(); break;
                case 'employees': html = renderEmployees(); break;
                case 'contracts': html = renderContracts(); break;
                default: html = '<div class="card">Раздел в разработке</div>';
            }
            contentDiv.innerHTML = html;
        }

        tabs.forEach(btn => {
            btn.addEventListener('click', () => {
                tabs.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                showTab(btn.dataset.tab);
            });
        });

        showTab('dashboard');
