import { FC } from 'react';

type StarIconProps = {
  className: string;
};

export const StarIcon: FC<StarIconProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.46589 0.289665L7.93705 3.25974C7.97051 3.33513 8.02314 3.40042 8.0897 3.44913C8.15626 3.49783 8.23443 3.52824 8.3164 3.53732L11.5641 4.01845C11.6581 4.03054 11.7467 4.06913 11.8197 4.12972C11.8926 4.19031 11.9468 4.27039 11.9759 4.36062C12.005 4.45085 12.0078 4.5475 11.984 4.63928C11.9603 4.73106 11.9109 4.81419 11.8416 4.87894L9.50073 7.20134C9.44099 7.25716 9.39615 7.32703 9.37029 7.40459C9.34444 7.48216 9.33839 7.56496 9.35269 7.64546L9.9171 10.9116C9.93344 11.0055 9.92311 11.102 9.88729 11.1903C9.85146 11.2786 9.79158 11.355 9.71445 11.4109C9.63733 11.4668 9.54605 11.5 9.45102 11.5066C9.35599 11.5132 9.26101 11.493 9.17689 11.4483L6.25308 9.90309C6.17821 9.86634 6.09591 9.84723 6.01251 9.84723C5.92911 9.84723 5.84681 9.86634 5.77194 9.90309L2.84813 11.4483C2.76401 11.493 2.66903 11.5132 2.574 11.5066C2.47897 11.5 2.38769 11.4668 2.31057 11.4109C2.23344 11.355 2.17356 11.2786 2.13774 11.1903C2.10191 11.102 2.09158 11.0055 2.10792 10.9116L2.67233 7.60845C2.68664 7.52795 2.68058 7.44515 2.65473 7.36758C2.62887 7.29002 2.58403 7.22015 2.52429 7.16433L0.15563 4.87894C0.0855536 4.81241 0.0362719 4.72699 0.013755 4.63302C-0.00876193 4.53905 -0.00354788 4.44057 0.0287654 4.34951C0.0610788 4.25844 0.119105 4.1787 0.195815 4.11994C0.272525 4.06119 0.364627 4.02593 0.460965 4.01845L3.70862 3.53732C3.7906 3.52824 3.86876 3.49783 3.93532 3.44913C4.00188 3.40042 4.05452 3.33513 4.08798 3.25974L5.55913 0.289665C5.5992 0.203161 5.66317 0.129924 5.74351 0.0785983C5.82384 0.0272724 5.91718 0 6.01251 0C6.10784 0 6.20118 0.0272724 6.28152 0.0785983C6.36185 0.129924 6.42582 0.203161 6.46589 0.289665Z"
        fill="currentColor"
      />
    </svg>
  );
};
