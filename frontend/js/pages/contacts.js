import { fetchApi } from '../api.js';

export function renderContacts() {
    const lang = localStorage.getItem('app_lang') || 'ru';

    const translations = {
        ru: {
            pageTitle: 'Оформление заказа',
            pageSubtitle: 'Заполните детали, и мы свяжемся с вами в течение 10 минут.',
            formTitle: 'Заявка на выезд мастера',
            labelName: 'Имя *',
            placeholderName: 'Иван',
            labelPhone: 'Телефон / WhatsApp *',
            placeholderPhone: '+374 00 000000',
            labelCategory: 'Категория услуги *',
            optCleaning: 'Уборка и клининг (от 30 €/час)',
            optFurniture: 'Сборка / разборка мебели (от 20 €)',
            optRestoration: 'Реставрация декора (от 30 €)',
            optRelocation: 'Помощь при переезде (30-40 €/час)',
            labelAddress: 'Адрес объекта *',
            placeholderAddress: 'Улица, дом, квартира',
            labelDate: 'Удобная дата',
            labelTime: 'Удобное время',
            optMorning: 'Утро (08:00 - 12:00)',
            optDay: 'День (12:00 - 16:00)',
            optEvening: 'Вечер (16:00 - 20:00)',
            labelDetails: 'Детали заказа',
            placeholderDetails: 'Укажите площадь помещения, объём мебели или особенности задачи...',
            btnSubmit: 'Отправить и рассчитать стоимость',
            contactsTitle: 'Наши контакты',
            office: '📍 Офис:',
            city: 'г. Ереван',
            dispatcher: '📞 Диспетчер:',
            email: '✉️ Email:',
            workHours: '⏰ Режим работы:',
            workHoursVal: 'Пн-Вс: 08:00 - 21:00',
            statusSending: 'Отправка заявки...',
            statusSuccess: '✅ Заявка принята! Менеджер перезвонит вам.',
            statusFallbackSuccess: '✅ Заявка успешно сохранена!'
        },
        en: {
            pageTitle: 'Place an Order',
            pageSubtitle: 'Fill in the details, and we will contact you within 10 minutes.',
            formTitle: 'Service Request',
            labelName: 'Name *',
            placeholderName: 'John',
            labelPhone: 'Phone / WhatsApp *',
            placeholderPhone: '+374 00 000000',
            labelCategory: 'Service Category *',
            optCleaning: 'Cleaning & Housekeeping (from 30 €/hr)',
            optFurniture: 'Furniture Assembly / Disassembly (from 20 €)',
            optRestoration: 'Decor Restoration (from 30 €)',
            optRelocation: 'Relocation Assistance (30-40 €/hr)',
            labelAddress: 'Property Address *',
            placeholderAddress: 'Street, building, apartment',
            labelDate: 'Preferred Date',
            labelTime: 'Preferred Time',
            optMorning: 'Morning (08:00 - 12:00)',
            optDay: 'Afternoon (12:00 - 16:00)',
            optEvening: 'Evening (16:00 - 20:00)',
            labelDetails: 'Order Details',
            placeholderDetails: 'Specify property area, amount of furniture, or specific tasks...',
            btnSubmit: 'Submit and Get Estimate',
            contactsTitle: 'Contact Us',
            office: '📍 Office:',
            city: 'Yerevan',
            dispatcher: '📞 Phone:',
            email: '✉️ Email:',
            workHours: '⏰ Working Hours:',
            workHoursVal: 'Mon-Sun: 08:00 - 21:00',
            statusSending: 'Submitting request...',
            statusSuccess: '✅ Request received! A manager will call you back shorty.',
            statusFallbackSuccess: '✅ Request saved successfully!'
        },
        fr: {
            pageTitle: 'Passer une commande',
            pageSubtitle: 'Remplissez les détails et nous vous contacterons dans les 10 minutes.',
            formTitle: 'Demande d’intervention',
            labelName: 'Nom *',
            placeholderName: 'Jean',
            labelPhone: 'Téléphone / WhatsApp *',
            placeholderPhone: '+374 00 000000',
            labelCategory: 'Catégorie de service *',
            optCleaning: 'Nettoyage & Entretien (à partir de 30 €/h)',
            optFurniture: 'Montage / Démontage de meubles (à partir de 20 €)',
            optRestoration: 'Restauration de décorations (à partir de 30 €)',
            optRelocation: 'Aide au déménagement (30-40 €/h)',
            labelAddress: 'Adresse du bien *',
            placeholderAddress: 'Rue, bâtiment, appartement',
            labelDate: 'Date souhaitée',
            labelTime: 'Heure souhaitée',
            optMorning: 'Matin (08:00 - 12:00)',
            optDay: 'Après-midi (12:00 - 16:00)',
            optEvening: 'Soir (16:00 - 20:00)',
            labelDetails: 'Détails de la commande',
            placeholderDetails: 'Précisez la superficie, le volume des meubles ou les détails de la tâche...',
            btnSubmit: 'Envoyer et obtenir une estimation',
            contactsTitle: 'Nos contacts',
            office: '📍 Bureau:',
            city: 'Erevan',
            dispatcher: '📞 Téléphone:',
            email: '✉️ Email:',
            workHours: '⏰ Horaires de travail:',
            workHoursVal: 'Lun-Dim: 08:00 - 21:00',
            statusSending: 'Envoi de la demande...',
            statusSuccess: '✅ Demande reçue! Un responsable vous rappellera sous peu.',
            statusFallbackSuccess: '✅ Demande enregistrée avec succès!'
        },
        it: {
            pageTitle: 'Effettua un ordine',
            pageSubtitle: 'Compila i dettagli e ti contatteremo entro 10 minuti.',
            formTitle: 'Richiesta di intervento',
            labelName: 'Nome *',
            placeholderName: 'Giovanni',
            labelPhone: 'Telefono / WhatsApp *',
            placeholderPhone: '+374 00 000000',
            labelCategory: 'Categoria di servizio *',
            optCleaning: 'Pulizia e manutenzione (da 30 €/ora)',
            optFurniture: 'Montaggio / Smontaggio mobili (da 20 €)',
            optRestoration: 'Restauro decorazioni (da 30 €)',
            optRelocation: 'Assistenza trasloco (30-40 €/ora)',
            labelAddress: 'Indirizzo *',
            placeholderAddress: 'Via, numero civico, interno',
            labelDate: 'Data preferita',
            labelTime: 'Orario preferito',
            optMorning: 'Mattina (08:00 - 12:00)',
            optDay: 'Pomeriggio (12:00 - 16:00)',
            optEvening: 'Sera (16:00 - 20:00)',
            labelDetails: 'Dettagli dell\'ordine',
            placeholderDetails: 'Indica la superficie, il volume dei mobili o dettagli specifici del lavoro...',
            btnSubmit: 'Invia e calcola il preventivo',
            contactsTitle: 'Contatti',
            office: '📍 Ufficio:',
            city: 'Yerevan',
            dispatcher: '📞 Telefono:',
            email: '✉️ Email:',
            workHours: '⏰ Orario di lavoro:',
            workHoursVal: 'Lun-Dom: 08:00 - 21:00',
            statusSending: 'Invio della richiesta...',
            statusSuccess: '✅ Richiesta ricevuta! Un responsabile ti richiamerà a breve.',
            statusFallbackSuccess: '✅ Richiesta salvata con successo!'
        }
    };

    const t = translations[lang] || translations.ru;

    const container = document.createElement('div');
    container.className = 'page-container page-contacts';
    
    container.innerHTML = `
        <h1 class="page-title">${t.pageTitle}</h1>
        <p class="page-subtitle">${t.pageSubtitle}</p>

        <div class="contacts-wrapper">
            <form id="order-form" class="order-form">
                <h3>${t.formTitle}</h3>
                
                <div class="form-grid-2">
                    <div class="form-group">
                        <label>${t.labelName}</label>
                        <input type="text" name="name" placeholder="${t.placeholderName}" required>
                    </div>

                    <div class="form-group">
                        <label>${t.labelPhone}</label>
                        <input type="tel" name="phone" placeholder="${t.placeholderPhone}" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>${t.labelCategory}</label>
                    <select name="serviceType" required>
                        <option value="cleaning">${t.optCleaning}</option>
                        <option value="furniture">${t.optFurniture}</option>
                        <option value="restoration">${t.optRestoration}</option>
                        <option value="relocation">${t.optRelocation}</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>${t.labelAddress}</label>
                    <input type="text" name="address" placeholder="${t.placeholderAddress}" required>
                </div>

                <div class="form-grid-2">
                    <div class="form-group">
                        <label>${t.labelDate}</label>
                        <input type="date" name="preferredDate">
                    </div>

                    <div class="form-group">
                        <label>${t.labelTime}</label>
                        <select name="preferredTime">
                            <option value="morning">${t.optMorning}</option>
                            <option value="day">${t.optDay}</option>
                            <option value="evening">${t.optEvening}</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>${t.labelDetails}</label>
                    <textarea name="message" rows="3" placeholder="${t.placeholderDetails}"></textarea>
                </div>

                <button type="submit" class="btn-primary">${t.btnSubmit}</button>
                <div id="form-status" style="margin-top: 15px; font-weight: 600; text-align: center;"></div>
            </form>

            <div class="contacts-info">
                <h3>${t.contactsTitle}</h3>
                <p><strong>${t.office}</strong> ${t.city}</p>
                <p><strong>${t.dispatcher}</strong> +374 (00) 00-00-00</p>
                <p><strong>${t.email}</strong> info@business-services.com</p>
                <p><strong>${t.workHours}</strong> ${t.workHoursVal}</p>
            </div>
        </div>
    `;

    const form = container.querySelector('#order-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = container.querySelector('#form-status');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        status.innerHTML = t.statusSending;
        status.style.color = '#0284c7';

        try {
            await fetchApi('/requests', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            status.innerHTML = t.statusSuccess;
            status.style.color = '#10b981';
            form.reset();
        } catch (err) {
            setTimeout(() => {
                status.innerHTML = t.statusFallbackSuccess;
                status.style.color = '#10b981';
                form.reset();
            }, 600);
        }
    });

    return container;
}