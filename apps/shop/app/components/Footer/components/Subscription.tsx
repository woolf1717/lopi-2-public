export default function SubscriptionForm() {
  return (
    <div className="footer-subscriptionForm flex-row">
      <input
        type="email"
        name="email"
        id=""
        className="footer-subscriptionForm--input"
        placeholder="Emali"
      />
      <div className="footer-subscriptionForm--button">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.25C0 4.52411 1.39911 3.125 3.125 3.125H21.875C23.6009 3.125 25 4.52411 25 6.25V18.75C25 20.4759 23.6009 21.875 21.875 21.875H3.125C1.39911 21.875 0 20.4759 0 18.75V6.25ZM3.125 4.6875C2.26206 4.6875 1.5625 5.38706 1.5625 6.25V6.58891L12.5 13.1514L23.4375 6.58891V6.25C23.4375 5.38706 22.7379 4.6875 21.875 4.6875H3.125ZM23.4375 8.41109L16.0034 12.8715L23.4375 17.3649V8.41109ZM23.3837 19.1581L14.4875 13.7811L12.5 14.9736L10.5125 13.7811L1.61634 19.1581C1.7958 19.8231 2.40325 20.3125 3.125 20.3125H21.875C22.5967 20.3125 23.2042 19.8231 23.3837 19.1581ZM1.5625 17.3649L8.9966 12.8715L1.5625 8.41109V17.3649Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
